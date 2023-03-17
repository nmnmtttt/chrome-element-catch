declare module "*.svg";
declare module "*.png";
declare module "*.jpg";
declare module "*.gif";
declare module "*.html";
declare module "*.json" {
  const version: string;
}

declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.less" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

/*
  认证内核类型
 */
declare const AUTH_CORE: string;

interface Window {
  RPAKeepAlive: () => void;
}
