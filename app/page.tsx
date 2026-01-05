// app/page.tsx
import ExploreControls from "@/components/ExploreControls";
import ResultList from "@/components/ResultList";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">
          Music Explorer
        </h1>
        <p className="text-sm text-neutral-600">
          분위기와 상황을 선택하면 AI가 검색 키워드를 만들고, YouTube에서 바로
          들을 수 있게 플레이리스트를 구성해줘요.
        </p>
      </header>

      <section className="mt-8">
        <ExploreControls />
      </section>

      <section className="mt-8 rounded-xl border bg-white p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <h2 className="text-base font-medium">AI 인사이트</h2>
            <p className="text-sm text-neutral-600">
              선택한 조건을 바탕으로 추천 방향을 설명해요. (지금은 더미)
            </p>
          </div>

          <button
            type="button"
            className="inline-flex h-10 items-center justify-center rounded-md bg-neutral-900 px-4 text-sm font-medium text-white transition hover:bg-neutral-800 active:scale-[0.99]"
          >
            AI로 플레이리스트 만들기
          </button>
        </div>

        <div className="mt-4 rounded-lg bg-neutral-50 p-4 text-sm text-neutral-700">
          “잔잔하고 반복적인 사운드 중심이라 작업/집중에 좋아요. 가사 부담이
          적은 곡들이 많아요.”
        </div>
      </section>

      <section className="mt-8">
        <ResultList />
      </section>
    </main>
  );
}
