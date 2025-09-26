import { z } from "zod";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
	type ActiveDomainData,
	getLinkToNavigate,
	LoginType,
	RegisterPlayer,
} from "apuesta-cloud-landing-utils";
import { useRouter } from "next/navigation";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { cn } from "@/lib/utils";

import EmailIcon from "@/components/icons/EmailIcon";
import UserIcon from "@/components/icons/UserIcon";
import KeyIcon from "@/components/icons/KeyIcon";
import { Switch } from "@/components/ui/switch";
import CallIcon from "@/components/icons/CallIcon";
import CardIcon from "@/components/icons/CardIcon";
import ChevronDownIcon from "@/components/icons/ChevronDownIcon";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";

import formBg from "@/public/form-bg.png";

import zeus from "@/public/zeus.png";

import bonus from "@/public/bonus.png";

import headerDecor from "@/public/header-decor.png";

const formSchema = z
	.object({
		email: z.email().optional(),
		phone: z.string().optional(),
		currency: z.string(),
		password: z.string(),
		loginType: z.enum(["email", "phone"]),
		acceptTerms: z.boolean(),
	})
	.refine(
		({ loginType, email, phone }) => {
			if (
				(loginType === "email" && !email) ||
				(loginType === "phone" && !phone)
			) {
				return false;
			} else {
				return true;
			}
		},
		{ error: "No phone or email", path: ["loginType"] },
	)
	.refine(
		({ loginType, phone }) => {
			if (loginType === "phone" && phone) {
				const regex = new RegExp(/^(?:\+49|0)(?:\s?\d+)+$/);

				return regex.test(phone!);
			} else {
				return true;
			}
		},
		{ error: "Wrong number format", path: ["phone"] },
	);

interface RegistrationFormProps {
	domainData: ActiveDomainData | null;
}

export function RegistrationForm({ domainData }: RegistrationFormProps) {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			currency: "",
			password: "",
			loginType: "email",
			acceptTerms: true,
		},
	});

	const [isLoading, setIsLoading] = useState(false);

	const [loginType, acceptTerms] = useWatch({
		control: form.control,
		name: ["loginType", "acceptTerms"],
	});

	const router = useRouter();

	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		try {
			setIsLoading(true);

			if (!domainData) {
				alert("No domain data found.");
				return;
			}

			const userLang = navigator.language;

			const language =
				userLang === "en" ? "en" : userLang === "tr" ? "tr" : "de";

			const dataToSend = {
				email: data.email ?? null,
				phone: data.phone ?? null,
				currency: "EUR",
				language,
				password: data.password,
				loginType:
					data.loginType === "email" ? LoginType.Email : LoginType.Phone,
				region: "de",
			};

			console.log("Data to send:", dataToSend);

			const response = await RegisterPlayer(domainData?.domain, dataToSend);

			const linkToNavigate = getLinkToNavigate({
				activeDomainData: domainData,
				refreshToken: response.refresh_token,
			});

			if (linkToNavigate) {
				router.push(linkToNavigate);
			}
		} catch (error) {
			console.error(error);

			alert(JSON.stringify(error));
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			<div className="w-screen flex items-center justify-center overflow-hidden relative pt-6">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="flex flex-col items-center relative z-2 w-[400px] px-[50px] pt-[46px] mt-[20%] animate-in slide-in-from-bottom ease-in-out"
					>
						<Image
							src="/character-decor.png"
							alt="character-decor"
							width={450}
							height={450}
							className="absolute left-1/2 translate-x-[-50%] top-[-100%] z-1 rotate-decor"
						/>

						<Image
							src={zeus}
							quality={100}
							alt="zeus"
							className="absolute left-1/2 translate-x-[-50%] top-[-100%] z-2"
						/>

						<Image
							src={bonus}
							quality={100}
							alt="bonus"
							width={326}
							height={246}
							className="absolute left-1/2 translate-x-[-50%] top-[-72%] z-5 w-full h-auto pulse-header"
						/>

						<Image
							src={headerDecor}
							quality={100}
							alt="header-decor"
							width={400}
							height={154}
							className="absolute left-1/2 translate-x-[-50%] top-[-20%] z-4 w-full h-auto pulse-header"
						/>

						<Image
							src={formBg}
							alt="form-bg"
							width={400}
							height={558}
							className="absolute left-1/2 translate-x-[-50%] top-0 z-3 !w-[400px] h-[558px] shrink-0 min-w-[400px]"
						/>

						<FormField
							name="loginType"
							control={form.control}
							render={({ field }) => (
								<FormItem className="w-full">
									<FormControl>
										<div className="rounded-full bg-black p-0.5 relative z-10 inline-flex gap-1 self-stretch w-full">
											<div
												onClick={() => form.setValue("loginType", "email")}
												className={cn(
													"rounded-full inline-flex items-center justify-center gap-1.5 h-9 flex-1 cursor-pointer transition-all",
													"text-white/50 bg-[#141414]",
													loginType === "email" && "text-white bg-[#1F1E22]",
												)}
											>
												<EmailIcon
													className={cn(
														"transition-all",
														loginType === "email" && "text-[#FF5C00]",
													)}
												/>
												<span className="text-xs font-medium">Email</span>
											</div>

											<div
												onClick={() => form.setValue("loginType", "phone")}
												className={cn(
													"rounded-full inline-flex items-center justify-center gap-1.5 h-9 flex-1 cursor-pointer transition-all",
													"text-white/50 bg-[#141414]",
													loginType === "phone" && "text-white bg-[#1F1E22]",
												)}
											>
												<CallIcon
													className={cn(
														"transition-all",
														loginType === "phone" && "text-[#FF5C00]",
													)}
												/>
												<span className="text-xs font-medium">Phone</span>
											</div>
										</div>
									</FormControl>

									<FormMessage className="z-20" />
								</FormItem>
							)}
						/>

						<div className="flex flex-col gap-[30px] relative z-10 self-stretch mt-4">
							{loginType === "email" ? (
								<FormField
									name="email"
									control={form.control}
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<div className="border-[1.5px] border-[#8A8A8A] rounded-full bg-white pl-10 relative">
													<EmailIcon className="absolute left-[15px] top-1/2 translate-y-[-50%] text-[#8A8A8A]" />

													<input
														placeholder="Email"
														className="placeholder:text-[#8A8A8A] placeholder:text-xs h-10 outline-none text-black"
														{...field}
													/>
												</div>
											</FormControl>
										</FormItem>
									)}
								/>
							) : (
								<FormField
									name="phone"
									control={form.control}
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<div className="border-[1.5px] border-[#8A8A8A] rounded-full bg-white pl-10 relative">
													<CallIcon className="absolute left-[15px] top-1/2 translate-y-[-50%] text-[#8A8A8A]" />

													<input
														placeholder="Phone"
														className="placeholder:text-[#8A8A8A] placeholder:text-xs h-10 outline-none text-black"
														{...field}
													/>
												</div>
											</FormControl>

											<FormMessage className="relative z-10" />
										</FormItem>
									)}
								/>
							)}

							<FormField
								name="password"
								control={form.control}
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<div className="border-[1.5px] border-[#8A8A8A] rounded-full bg-white pl-10 relative">
												<KeyIcon className="absolute left-[15px] top-1/2 translate-y-[-50%] text-[#8A8A8A]" />

												<input
													placeholder="Create password"
													className="placeholder:text-[#8A8A8A] placeholder:text-xs h-10 outline-none text-black"
													{...field}
												/>
											</div>
										</FormControl>
									</FormItem>
								)}
							/>

							<FormField
								name="currency"
								control={form.control}
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<div className="border-[1.5px] border-[#8A8A8A] opacity-70 rounded-full bg-white pl-10 relative h-10 inline-flex items-center">
												<CardIcon className="absolute left-[15px] top-1/2 translate-y-[-50%] text-[#8A8A8A]" />

												<div className="text-black text-xs">€ EUR | Euro</div>

												<ChevronDownIcon className="absolute right-5 top-1/2 translate-y-[-50%] text-[#8A8A8A]" />
											</div>
										</FormControl>
									</FormItem>
								)}
							/>

							<button
								type="submit"
								disabled={isLoading}
								className={cn(
									"cursor-pointer relative z-3 inline-flex items-center justify-center gap-2 bg-[#FF5C00] rounded-full px-4.5 h-10 w-fit border-2 border-[#ff8139] mx-auto",
									"font-bold text-black [box-shadow:0px_-4px_12px_rgba(255,92,0,0.70),0px_8px_6px_rgba(31,28,41,0.50),0px_2px_2px_rgba(0,0,0,0.60)]",
								)}
							>
								<UserIcon className="w-4 h-4" /> Fast Registration
							</button>
						</div>

						<div className="flex flex-col items-center gap-4 relative z-10 self-stretch mt-10">
							<div className="flex items-center justify-between self-stretch">
								<FormField
									name="acceptTerms"
									control={form.control}
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Switch
													onCheckedChange={field.onChange}
													checked={field.value}
													className={cn(!acceptTerms && "bg-[#FF1717]")}
												/>
											</FormControl>
										</FormItem>
									)}
								/>

								<div
									className={cn(
										"text-[9px] leading-[11px]",
										!acceptTerms && "text-[#FF1717]",
									)}
								>
									I am 18 years old. <br /> I accept{" "}
									<span
										className={cn(
											"text-[#FCD816]",
											!acceptTerms && "text-[#FF1717]",
										)}
									>
										Privacy Policy
									</span>{" "}
									and{" "}
									<span
										className={cn(
											"text-[#FCD816]",
											!acceptTerms && "text-[#FF1717]",
										)}
									>
										Terms and Conditions
									</span>
								</div>
							</div>

							<a
								href="https://hertzbetz.io/en/login"
								className="inline-flex items-center gap-2 h-10 px-5 text-white/50 cursor-pointer"
							>
								<UserIcon className="w-4 h-4" />
								Sign in
							</a>
						</div>
					</form>
				</Form>
			</div>
		</>
	);
}

export default RegistrationForm;
