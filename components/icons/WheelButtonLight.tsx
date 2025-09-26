import { HtmlHTMLAttributes } from "react";

interface IconProps extends HtmlHTMLAttributes<SVGElement> {}

const WheelButtonLight: React.FC<IconProps> = (props) => {
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
			<g filter="url(#filter0_i_2609_351)">
				<circle
					cx="67.0009"
					cy="66.9999"
					r="56.6923"
					fill="url(#paint0_radial_2609_351)"
					fill-opacity="0.3"
				/>
			</g>
			<g filter="url(#filter1_ddi_2609_351)">
				<circle
					cx="66.8411"
					cy="66.8411"
					r="49.3177"
					fill="url(#paint1_radial_2609_351)"
				/>
				<circle
					cx="66.8411"
					cy="66.8411"
					r="49.06"
					stroke="#2B2738"
					stroke-width="0.515385"
				/>
			</g>
			<g filter="url(#filter2_dd_2609_351)">
				<path
					d="M44.8092 80.4457C43.6163 78.3834 42.7216 76.2668 42.1251 74.0959C41.5287 71.9251 41.2305 69.6999 41.2305 67.4205C41.2305 60.1481 43.7518 53.9612 48.7945 48.8596C53.8373 43.7581 59.9915 41.2074 67.2574 41.2074H67.8267L62.6213 35.9973L67.1761 31.4385L80.1895 44.4637L67.1761 57.4888L62.6213 52.93L67.8267 47.7199H67.2574C61.8351 47.7199 57.2262 49.633 53.4306 53.4592C49.635 57.2853 47.7372 61.9391 47.7372 67.4205C47.7372 68.8316 47.8999 70.2155 48.2252 71.5723C48.5505 72.9291 49.0385 74.2587 49.6892 75.5613L44.8092 80.4457ZM67.3387 103.077L54.3253 90.0518L67.3387 77.0266L71.8934 81.5854L66.6881 86.7955H67.2574C72.6797 86.7955 77.2886 84.8824 81.0842 81.0563C84.8798 77.2301 86.7776 72.5763 86.7776 67.0949C86.7776 65.6838 86.6149 64.2999 86.2896 62.9431C85.9642 61.5863 85.4762 60.2567 84.8256 58.9542L89.7056 54.0697C90.8985 56.132 91.7932 58.2486 92.3896 60.4195C92.9861 62.5904 93.2843 64.8155 93.2843 67.0949C93.2843 74.3673 90.763 80.5542 85.7202 85.6558C80.6775 90.7573 74.5232 93.3081 67.2574 93.3081H66.6881L71.8934 98.5181L67.3387 103.077Z"
					fill="white"
				/>
			</g>
			<defs>
				<filter
					id="filter0_i_2609_351"
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
						result="effect1_innerShadow_2609_351"
					/>
				</filter>
				<filter
					id="filter1_ddi_2609_351"
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
						result="effect1_dropShadow_2609_351"
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
						in2="effect1_dropShadow_2609_351"
						result="effect2_dropShadow_2609_351"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect2_dropShadow_2609_351"
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
						result="effect3_innerShadow_2609_351"
					/>
				</filter>
				<filter
					id="filter2_dd_2609_351"
					x="39.1689"
					y="29.3769"
					width="56.1768"
					height="77.823"
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
					<feOffset dy="2.06154" />
					<feGaussianBlur stdDeviation="1.03077" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
					/>
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow_2609_351"
					/>
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset />
					<feGaussianBlur stdDeviation="1.03077" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0"
					/>
					<feBlend
						mode="normal"
						in2="effect1_dropShadow_2609_351"
						result="effect2_dropShadow_2609_351"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect2_dropShadow_2609_351"
						result="shape"
					/>
				</filter>
				<radialGradient
					id="paint0_radial_2609_351"
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
					id="paint1_radial_2609_351"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(71.1234 70.6081) rotate(-94.2364) scale(55.814 92.5824)"
				>
					<stop stop-color="#454448" />
					<stop offset="1" stop-color="#2B2738" />
				</radialGradient>
			</defs>
		</svg>
	);
};

export default WheelButtonLight;
