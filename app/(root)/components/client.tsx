"use client";

import Image from "next/image";
import {
	ActiveDomainData,
	initAppAndGetActiveDomain,
} from "apuesta-cloud-landing-utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import LogoIcon from "@/components/icons/LogoIcon";
import WheelSpin from "@/components/icons/WheelSpin";
import WheelDecor from "@/components/icons/WheelDecor";
import WheelButton from "@/components/icons/WheelButton";

import RegistrationForm from "./RegistrationForm";

import scatterImg from "@/public/scatter.png";
import zeusImg from "@/public/full-zeus.webp";

const RootClient = () => {
	const [isLoading, setIsLoading] = useState(false);

	const [loading, setLoading] = useState(false);

	const [domainData, setDomainData] = useState<ActiveDomainData | null>(null);

	const [error, setError] = useState("");

	const [showRegistrationForm, setShowRegistrationForm] = useState(false);

	const [rotation, setRotation] = useState(0);

	useEffect(() => {
		setIsLoading(true);
		initAppAndGetActiveDomain(
			process.env.NEXT_PUBLIC_REDIRECTOR_ORIGIN!,
			process.env.NEXT_PUBLIC_CAMPAIGN_ID!,
		)
			.then((response) => {
				setDomainData(response);
				setIsLoading(false);
			})
			.catch((e) => {
				console.log(e.message);
				setError(e.message);
			})
			.finally(() => setIsLoading(false));
	}, []);

	const AnimatedImage = motion.create(Image);

	const onSpin = () => {
		if (loading) return;
		setLoading(true);
		const degree = 2700;
		setRotation(degree);

		setTimeout(() => setShowRegistrationForm(true), 4000);
	};

	if (error) {
		return <div>{`ERROR: ${error}`}</div>;
	}

	if (isLoading) {
		return <div>Loading...</div>
	}

	return (
		<div
			className={cn(
				"flex w-screen h-screen relative overflow-hidden",
				showRegistrationForm && "max-sm:min-h-[1400px]",
			)}
		>
			<Image
				src="/background.png"
				alt="background"
				fill
				className="absolute object-cover z-0"
			/>

			{!showRegistrationForm && (
				<>
					<LogoIcon className="z-30 mx-auto mt-10 max-sm:mt-12" />

					<div className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] aspect-square z-10">
						<div className="relative">
							<AnimatedImage
								src={zeusImg}
								variants={{
									initial: { y: 0 },
									animate: {
										y: 30, // Измените это значение, чтобы настроить расстояние перемещения
										transition: {
											y: {
												duration: 2, // Длительность анимации (секунды)
												repeat: Infinity, // Повторять бесконечно
												repeatType: "reverse", // Вернуться в исходное положение
												ease: "easeInOut", // Плавное начало и окончание
											},
										},
									},
								}}
								alt="background"
								initial="initial"
								animate="animate"
								className={cn(
									"absolute z-30 left-[-16%] top-1/2 translate-y-[-50%] w-[17vw]",
									"max-sm:left-[-6%] max-sm:z-30 max-sm:w-[47vw] max-sm:top-[115%]",
								)}
							/>

							<AnimatedImage
								src={scatterImg}
								variants={{
									initial: { y: 0 },
									animate: {
										y: 30, // Измените это значение, чтобы настроить расстояние перемещения
										transition: {
											y: {
												duration: 2.5, // Длительность анимации (секунды)
												repeat: Infinity, // Повторять бесконечно
												repeatType: "reverse", // Вернуться в исходное положение
												ease: "easeInOut", // Плавное начало и окончание
											},
										},
									},
								}}
								alt="background"
								initial="initial"
								animate="animate"
								className={cn(
									"absolute z-30 right-[-30%] top-1/2 translate-y-[-50%] w-[25vw]",
									"max-sm:right-[-12%] max-sm:z-30 max-sm:w-[70vw] max-sm:top-[115%]",
								)}
							/>

							<div
								style={{
									transform: `rotate(${rotation}deg)`,
									transition: "transform 4s ease-in-out",
								}}
							>
								<WheelSpin
									className={cn(
										"z-10 sm:w-[45vw] sm:h-[45vw] relative max-sm:scale-[1.4]",
										rotation === 0 && "wheel-spin",
									)}
								/>
							</div>

							<WheelDecor className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-20 sm:w-[45vw] sm:h-[45vw] max-sm:scale-[1.4]" />

							<div
								onClick={onSpin}
								className="flex items-center justify-center absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] pulse-bonus cursor-pointer z-30"
							>
								<WheelButton className="sm:w-[12vw] sm:h-[12vw] max-sm:scale-[1.1]" />
							</div>
						</div>
					</div>
				</>
			)}

			{showRegistrationForm && <RegistrationForm domainData={domainData} />}
		</div>
	);
};

export default RootClient;
