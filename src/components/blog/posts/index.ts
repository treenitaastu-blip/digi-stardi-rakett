import type { ComponentType } from "react";
import { PaljuMaksabPostContent } from "./PaljuMaksabPostContent";
import { IseVoiTellidaPostContent } from "./IseVoiTellidaPostContent";

export const blogPostContentBySlug: Record<string, ComponentType> = {
  "palju-maksab-kodulehe-tegemine-eestis": PaljuMaksabPostContent,
  "kodulehe-tegemine-ise-voi-tellida-spetsialistilt": IseVoiTellidaPostContent,
};
