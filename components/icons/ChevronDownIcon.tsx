import { HtmlHTMLAttributes } from "react";

interface IconProps extends HtmlHTMLAttributes<SVGElement> {}

const ChevronDownIcon: React.FC<IconProps> = (props) => {
	return (
		<svg
			width="12"
			height="7"
			viewBox="0 0 12 7"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M9.93886 0.625404C10.3098 0.274525 10.8902 0.274525 11.2611 0.625404C11.6624 1.00497 11.6624 1.64368 11.2611 2.02325L6.6872 6.34995C6.30165 6.71465 5.69835 6.71465 5.3128 6.34995L0.738859 2.02324C0.337607 1.64368 0.337607 1.00497 0.738859 0.625403C1.10979 0.274524 1.69021 0.274524 2.06114 0.625403L5.3128 3.7013C5.69835 4.06601 6.30165 4.06601 6.6872 3.7013L9.93886 0.625404Z"
				fill="#8A8A8A"
			/>
		</svg>
	);
};

export default ChevronDownIcon;
