# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

「Stop Shipping KML(脱KML)」— データ配布フォーマットとしてのKMLの問題点を解説する非営利の啓発サイト。日英バイリンガルの静的シングルページで、GitHub Pages(https://shimizu.github.io/Stop-Shipping-KML/)に公開される。ビルドツールは Vite。

## コマンド

- **開発サーバー**: `npm run dev`(ブラウザが自動で開く)
- **本番ビルド**: `npm run build`(出力先は `dist/`)
- **ビルド確認**: `npm run preview`
- **デプロイ**: `npm run deploy`(gh-pages で `dist/` を公開。事前に `npm run build` が必要)

テスト・リンターは導入されていない。

## アーキテクチャ

Vite の `root` が `src/` に設定されている点が最重要(`vite.config.js`)。エントリーポイントの `index.html` はプロジェクトルートではなく **`src/index.html`** にある。静的アセット(OGP画像、favicon など)は `public/` に置くと `publicDir: '../public'` の設定でビルド時にコピーされる。`base: "./"` は GitHub Pages のサブパス配信のための相対パス設定なので変更しないこと。

### コンテンツ構造(バイリンガル方式)

- ページ本文はほぼすべて `src/index.html` に直接書かれている(547行)。日本語と英語のテキストは同じ場所に `<span class="ja">` / `<span class="en">` のペアで併記し、`<html>` の `data-lang` 属性で表示を切り替える。**テキストを追加・変更するときは必ず ja/en 両方を更新すること。**
- `src/index.js` の役割は2つだけ: 言語切り替え関数 `setLang()`(HTML の inline `onclick` から呼べるよう `window` に公開している)と、2027年6月25日(Google Earth Pro デスクトップ版の配布終了日)までのカウントダウン表示。
- スタイルは `src/index.scss` に集約。

### その他の注意点

- OGP メタタグ(`src/index.html` 内)の URL は絶対 URL(`https://shimizu.github.io/Stop-Shipping-KML/...`)で記述する必要がある。
- `@vitejs/plugin-legacy` により古いブラウザ(IE 11 を除く)向けの legacy バンドルも生成される。

## 言語・コミット規約

- 応答・コメント・ドキュメント・コミットメッセージはすべて日本語。
- コミットメッセージには `feat:` / `fix:` / `docs:` / `refactor:` / `perf:` / `test:` / `chore:` / `style:` のプレフィックスを付ける。
