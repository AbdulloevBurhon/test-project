import {
  User,
  Users,
  MessageCircle,
  Globe,
  Trophy,
  Shield,
  Shuffle,
  Brain,
  Search,
  Music,
  Video,
  Film,
} from "lucide-react";

export const cards = [
  {
    title: "Профиль",
    icon: User,
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Друзья",
    icon: Users,
    color: "from-cyan-500 to-sky-600",
  },
  {
    title: "Чат",
    icon: MessageCircle,
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Глобальный чат",
    icon: Globe,
    color: "from-purple-500 to-fuchsia-600",
  },
  {
    title: "Рейтинг",
    icon: Trophy,
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Вход клан",
    icon: Shield,
    color: "from-red-500 to-rose-600",
  },
  {
    title: "Рулетка",
    icon: Shuffle,
    color: "from-pink-500 to-violet-600",
  },
  {
    title: "Проверь IQ",
    icon: Brain,
    color: "from-teal-500 to-cyan-600",
    path: "iq", // ← ВАЖНО
  },
  {
    title: "Поиск",
    icon: Search,
    color: "from-gray-500 to-slate-600",
  },
  {
    title: "Музыка",
    icon: Music,
    color: "from-indigo-500 to-purple-600",
  },
  {
    title: "Видео",
    icon: Video,
    color: "from-red-500 to-pink-600",
  },
  {
    title: "Фильмы",
    icon: Film,
    color: "from-orange-500 to-amber-500",
  },
];
