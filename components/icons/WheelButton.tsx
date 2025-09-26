import { HtmlHTMLAttributes } from "react";

interface IconProps extends HtmlHTMLAttributes<SVGElement> {}

const WheelButton: React.FC<IconProps> = (props) => {
	return (
		<svg
			width="134"
			height="134"
			viewBox="0 0 134 134"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<circle
				opacity="0.1"
				cx="67"
				cy="67"
				r="66.4846"
				fill="#222226"
				stroke="#222226"
				stroke-width="1.03077"
			/>
			<g filter="url(#filter0_i_2609_346)">
				<circle
					cx="67.0009"
					cy="66.9999"
					r="56.6923"
					fill="url(#paint0_radial_2609_346)"
					fill-opacity="0.3"
				/>
			</g>
			<g filter="url(#filter1_ddi_2609_346)">
				<circle
					cx="66.8411"
					cy="66.8411"
					r="49.3177"
					fill="url(#paint1_radial_2609_346)"
				/>
				<circle
					cx="66.8411"
					cy="66.8411"
					r="49.06"
					stroke="#2B2738"
					stroke-width="0.515385"
				/>
			</g>
			<g filter="url(#filter2_d_2609_346)">
				<path
					d="M46.9552 78.7646C45.89 76.9248 45.0912 75.0366 44.5586 73.1C44.026 71.1634 43.7598 69.1784 43.7598 67.145C43.7598 60.6574 46.0111 55.1381 50.5136 50.5871C55.0162 46.0361 60.5113 43.7606 66.9989 43.7606H67.5073L62.8595 39.1128L66.9263 35.0459L78.5459 46.6655L66.9263 58.2851L62.8595 54.2182L67.5073 49.5704H66.9989C62.1574 49.5704 58.0422 51.277 54.6531 54.6903C51.2641 58.1035 49.5696 62.2551 49.5696 67.145C49.5696 68.4038 49.7148 69.6384 50.0053 70.8487C50.2958 72.0591 50.7315 73.2453 51.3125 74.4072L46.9552 78.7646ZM67.0716 98.9536L55.452 87.334L67.0716 75.7144L71.1384 79.7813L66.4906 84.4291H66.9989C71.8404 84.4291 75.9557 82.7225 79.3447 79.3092C82.7338 75.896 84.4283 71.7444 84.4283 66.8545C84.4283 65.5957 84.2831 64.3611 83.9926 63.1508C83.7021 61.9404 83.2663 60.7542 82.6854 59.5923L87.0427 55.2349C88.1078 57.0747 88.9067 58.9629 89.4392 60.8995C89.9718 62.8361 90.2381 64.8211 90.2381 66.8545C90.2381 73.3421 87.9868 78.8614 83.4842 83.4124C78.9816 87.9634 73.4865 90.2389 66.9989 90.2389H66.4906L71.1384 94.8867L67.0716 98.9536Z"
					fill="white"
				/>
			</g>
			<defs>
				<filter
					id="filter0_i_2609_346"
					x="10.3086"
					y="10.3076"
					width="113.385"
					height="115.446"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					/>
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="3.09231" />
					<feGaussianBlur stdDeviation="1.03077" />
					<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
					/>
					<feBlend
						mode="normal"
						in2="shape"
						result="effect1_innerShadow_2609_346"
					/>
				</filter>
				<filter
					id="filter1_ddi_2609_346"
					x="11.3388"
					y="15.4619"
					width="111.005"
					height="113.066"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="6.18462" />
					<feGaussianBlur stdDeviation="3.09231" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
					/>
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow_2609_346"
					/>
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="2.06154" />
					<feGaussianBlur stdDeviation="1.03077" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
					/>
					<feBlend
						mode="normal"
						in2="effect1_dropShadow_2609_346"
						result="effect2_dropShadow_2609_346"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect2_dropShadow_2609_346"
						result="shape"
					/>
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="-3.09231" />
					<feGaussianBlur stdDeviation="1.03077" />
					<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
					/>
					<feBlend
						mode="normal"
						in2="shape"
						result="effect3_innerShadow_2609_346"
					/>
				</filter>
				<filter
					id="filter2_d_2609_346"
					x="42.729"
					y="35.0459"
					width="48.5401"
					height="65.9693"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="1.03077" />
					<feGaussianBlur stdDeviation="0.515385" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
					/>
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow_2609_346"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow_2609_346"
						result="shape"
					/>
				</filter>
				<radialGradient
					id="paint0_radial_2609_346"
					cx="0"
					cy="0"
					r="1"
					gradientTransform="matrix(-18.366 -85.0168 152.318 16.7578 88.6253 110.249)"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#45396B" />
					<stop offset="1" stop-color="#2B2738" />
				</radialGradient>
				<radialGradient
					id="paint1_radial_2609_346"
					cx="0"
					cy="0"
					r="1"
					gradientTransform="matrix(-15.9769 -73.9577 132.504 14.5779 85.6526 104.464)"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#454448" />
					<stop offset="1" stop-color="#2B2738" />
				</radialGradient>
			</defs>
		</svg>
	);
};

export default WheelButton;
