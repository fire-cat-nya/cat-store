"use client";

import { Search, ShoppingCart, MapPin } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function Header() {
  const { currentTheme, switchTheme } = useTheme();

  return (
    <header
      className={`${currentTheme.colors.primary} ${currentTheme.colors.text} transition-colors duration-300`}
    >
      {/* Top bar */}
      <div className="px-4 py-2 text-sm">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <span>配送先: 日本</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>こんにちは、サインイン</span>
            <span>注文履歴</span>
            <span>カート</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div
        className={`${currentTheme.colors.secondary} px-4 py-3 transition-colors duration-300`}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold mr-8">
              <span className="text-pink-400">Cat</span>
              <span className="text-purple-400">Nyaa</span>
            </div>
          </div>

          {/* Location */}
          <div className="hidden md:flex items-center mr-4">
            <MapPin className="w-5 h-5 mr-1" />
            <div className="text-sm">
              <div className="text-gray-300">お届け先</div>
              <div className="font-bold">日本</div>
            </div>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-4">
            <div className="flex">
              <select className="bg-gray-200 text-black px-3 py-2 rounded-l-md border-r border-gray-300">
                <option>すべて</option>
                <option>ランジェリー</option>
                <option>下着</option>
                <option>ナイトウェア</option>
              </select>
              <input
                type="text"
                placeholder="CatNyaaで検索"
                className="flex-1 px-4 py-2 text-black"
              />
              <button
                className={`${currentTheme.colors.accent} px-4 py-2 rounded-r-md hover:opacity-80 transition-opacity`}
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Language switcher */}
          <button
            onClick={switchTheme}
            className="bg-white text-black px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors mr-4"
          >
            JP
          </button>

          {/* Right side icons */}
          <div className="flex items-center space-x-6">
            <div className="text-sm">
              <div className="text-gray-300">こんにちは</div>
              <div className="font-bold">アカウント&リスト</div>
            </div>

            <div className="text-sm">
              <div className="text-gray-300">返品</div>
              <div className="font-bold">注文履歴</div>
            </div>

            <div className="flex items-center">
              <ShoppingCart className="w-8 h-8" />
              <span className="ml-1 font-bold">カート</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <div
        className={`${currentTheme.colors.primary} px-4 py-2 transition-colors duration-300`}
      >
        <div className="flex items-center space-x-6 max-w-7xl mx-auto text-sm">
          <button className="hover:underline">すべて</button>
          <button className="hover:underline">今日のお得情報</button>
          <button className="hover:underline">カスタマーサービス</button>
          <button className="hover:underline">レジストリ</button>
          <button className="hover:underline">ギフトカード</button>
          <button className="hover:underline">売る</button>
        </div>
      </div>
    </header>
  );
}
