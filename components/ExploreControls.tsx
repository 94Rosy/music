// components/ExploreControls.tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function ExploreControls() {
  return (
    <div className="rounded-xl border bg-white p-5">
      <div className="space-y-1">
        <h2 className="text-base font-medium">탐색 조건</h2>
        <p className="text-sm text-neutral-600">
          아래에서 분위기/상황을 고르고 추천을 받아보세요.
        </p>
      </div>

      <div className="mt-5">
        <Tabs defaultValue="mood">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="mood">분위기</TabsTrigger>
            <TabsTrigger value="situation">상황</TabsTrigger>
            <TabsTrigger value="tempo">템포</TabsTrigger>
            <TabsTrigger value="lang">언어</TabsTrigger>
          </TabsList>

          <TabsContent value="mood" className="mt-4">
            <div className="flex flex-wrap gap-2">
              {["잔잔", "신남", "감성", "집중", "드라이브", "밤"].map((t) => (
                <button
                  key={t}
                  type="button"
                  className="rounded-full border px-3 py-1 text-sm text-neutral-800 transition hover:bg-neutral-50"
                >
                  {t}
                </button>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="situation" className="mt-4">
            <div className="flex flex-wrap gap-2">
              {["공부/작업", "출근", "운동", "산책", "카페", "집정리"].map(
                (t) => (
                  <button
                    key={t}
                    type="button"
                    className="rounded-full border px-3 py-1 text-sm text-neutral-800 transition hover:bg-neutral-50"
                  >
                    {t}
                  </button>
                )
              )}
            </div>
          </TabsContent>

          <TabsContent value="tempo" className="mt-4">
            <div className="flex flex-wrap gap-2">
              {["느림", "중간", "빠름"].map((t) => (
                <button
                  key={t}
                  type="button"
                  className="rounded-full border px-3 py-1 text-sm text-neutral-800 transition hover:bg-neutral-50"
                >
                  {t}
                </button>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="lang" className="mt-4">
            <div className="flex flex-wrap gap-2">
              {["무관", "한국어", "영어", "일본어"].map((t) => (
                <button
                  key={t}
                  type="button"
                  className="rounded-full border px-3 py-1 text-sm text-neutral-800 transition hover:bg-neutral-50"
                >
                  {t}
                </button>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
