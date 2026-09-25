# 5.1.1.React-Form-State-Management

Reactの`useState`を使用して、フォームの入力値を管理する練習アプリです。

単一のテキスト入力フォームを作成し、入力値をリアルタイムで表示します。フォームを送信すると、入力内容をTailwind CSSでスタイリングした赤背景のアラートボックスに表示し、その後フォームをリセットします。

## 目次

* [概要](#概要)
* [課題](#課題)
* [学習内容](#学習内容)
* [使用技術](#使用技術)
* [プロジェクト構成](#プロジェクト構成)
* [実装内容](#実装内容)
* [起動方法](#起動方法)
* [動作](#動作)

## 概要

Reactのフォーム処理における基本的な状態管理を学習するための練習アプリです。

`useState`を使用してフォームの入力値と送信後の値を管理し、`onChange`と`onSubmit`を使ってフォームを制御します。

## 課題

### 問題文

単一のテキスト入力フォームを作成し、入力値をリアルタイムで表示してください。

送信ボタンを押すと、Tailwind CSSで赤背景のアラートボックスに入力内容を表示し、フォームをリセットしてください。

### 条件

1. TypeScriptで作成する
2. `useState`を使用する
3. Tailwind CSSでボタンやアラートをスタイリングする

## 学習内容

* `useState`によるフォーム状態管理
* フォームの入力値の取得
* `onChange`による入力値の更新
* `onSubmit`によるフォーム送信処理
* `event.preventDefault()`によるフォーム送信時のページ遷移防止
* 送信後のフォームリセット
* 条件付きレンダリング
* Tailwind CSSによるUIスタイリング

## 使用技術

* React
* TypeScript
* Vite
* Tailwind CSS

## プロジェクト構成

```text
src/
├── components/
│   └── Form.tsx
├── pages/
│   └── FormPage.tsx
├── App.tsx
├── index.css
└── main.tsx
```

### 各ファイルの役割

#### `components/Form.tsx`

フォームの状態管理とイベント処理を担当します。

* `useState`
* `handleInput`
* `handleSubmit`
* 入力値の管理
* 送信後の値の管理

#### `pages/FormPage.tsx`

フォームページを表示するページコンポーネントです。

#### `App.tsx`

アプリケーションのルートコンポーネントです。

## 実装内容

### 入力値の状態管理

`useState`を使用して、現在入力されている値を管理します。

```tsx
const [inputValue, setInputValue] = useState("");
```

### 入力値の更新

`onChange`イベントを使用して、入力されるたびにstateを更新します。

```tsx
const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
  setInputValue(event.target.value);
};
```

### フォーム送信

`onSubmit`イベントでフォームの送信処理を実行します。

```tsx
const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  setSubmittedValue(inputValue);
  setInputValue("");
};
```

`event.preventDefault()`によって、フォーム送信時のページリロードを防止します。

### 送信内容の表示

送信された値が存在する場合のみ、アラートボックスを表示します。

```tsx
{submittedValue && (
  <div className="bg-red-500 p-4 text-white">
    {submittedValue}
  </div>
)}
```

### フォームのリセット

送信後に、

```tsx
setInputValue("");
```

を実行することで、入力フォームを空にします。

## 起動方法

### 1. 依存関係をインストール

```bash
npm install
```

### 2. 開発サーバーを起動

```bash
npm run dev
```

### 3. ブラウザで確認

表示されたURLにアクセスしてアプリケーションを確認します。

## 動作

### 1. テキストを入力

```text
Hello React
```

入力すると、フォームの下に現在の入力値がリアルタイムで表示されます。

### 2. 送信

「送信」ボタンをクリックします。

```text
┌─────────────────────┐
│ Hello React         │
└─────────────────────┘
```

赤背景のアラートボックスに送信内容が表示されます。

### 3. フォームをリセット

送信後、入力フォームの値は空になります。

```text
入力フォーム
    ↓
送信
    ↓
赤背景のアラート表示
    ↓
入力フォームをリセット
```

## まとめ

この課題では、Reactのフォーム処理における基本的な状態管理を学習しました。

特に、以下の関係を理解することが重要です。

```text
useState
   ↓
フォームの状態を管理
   ↓
onChange
   ↓
入力値を更新
   ↓
onSubmit
   ↓
送信内容を表示
   ↓
setInputValue("")
   ↓
フォームをリセット
```
