import React from "react";
import type { SVGProps } from "react";

export function NetlifyIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 32 32"
			{...props}
		>
			<path
				fill="#fff"
				d="M29.39 13.98L18.02 2.61l-.42-.42l-.47-.19h-2.26l-.47.2l-.42.41L2.61 13.98l-.42.42l-.19.47v2.26l.2.47l.41.42l11.37 11.37l.42.42l.47.19h2.26l.47-.2l.42-.41l11.37-11.37l.42-.42l.19-.47v-2.26l-.2-.47z"
			></path>
			<path
				fill="#05bdba"
				d="M14.99 27.38v-5.46l.14-.15h1.74l.14.15v5.46l-.14.14h-1.74zm0-17.3V4.62l.14-.14h1.74l.14.14v5.46l-.14.15h-1.74zM10.4 23.33h-.24l-1.2-1.2v-.23l1.6-1.6h1.26l.17.18v1.26l-1.6 1.6ZM8.96 10.16v-.24l1.2-1.2h.24l1.59 1.6v1.26l-.17.17h-1.26zm-4.8 4.82h6.14l.14.15v1.74l-.14.14H4.16L4 16.87v-1.74l.15-.15Z"
			></path>
			<path
				fill="#014847"
				d="M19.26 19.62h-1.74l-.15-.15v-4.06c0-.73-.28-1.29-1.15-1.3c-.45-.02-.97 0-1.51.02l-.09.08v5.26l-.14.15h-1.74l-.14-.15v-6.94l.14-.15h3.9a2.75 2.75 0 0 1 2.76 2.75v4.34l-.15.15Z"
			></path>
			<path
				fill="#05bdba"
				d="M27.84 17.02H21.7l-.14-.15v-1.74l.14-.14h6.14l.15.14v1.74z"
			></path>
		</svg>
	);
}
