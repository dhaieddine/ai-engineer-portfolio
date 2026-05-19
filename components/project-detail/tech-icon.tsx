import {
  Brain,
  Globe,
  Layers,
  Monitor,
  Scan,
  type LucideIcon,
} from "lucide-react"
import {
  SiFastapi,
  SiMongodb,
  SiOpencv,
  SiPandas,
  SiPlotly,
  SiPython,
  SiPytorch,
  SiScikitlearn,
  SiStreamlit,
} from "react-icons/si"
import type { IconType } from "react-icons"

const iconMap: Record<string, IconType | LucideIcon> = {
  pytorch: SiPytorch,
  python: SiPython,
  opencv: SiOpencv,
  scikitlearn: SiScikitlearn,
  mongodb: SiMongodb,
  fastapi: SiFastapi,
  streamlit: SiStreamlit,
  pandas: SiPandas,
  plotly: SiPlotly,
  brain: Brain,
  layers: Layers,
  scan: Scan,
  monitor: Monitor,
  globe: Globe,
}

export function TechIcon({
  iconId,
  className,
}: {
  iconId: string
  className?: string
}) {
  const Icon = iconMap[iconId] ?? Brain
  return <Icon className={className} />
}
