import { addQuestion } from "@/lib/actions";

export function AskQuestion({ topic }: { topic: string }) {
  return (
    <form className="relative my-8" action={addQuestion}>
      <input type="hidden" name="topic_id" value={topic} className="hidden" />
      ...
    </form>
  );
}
  export async function addVote(data: FormData) {
    try {
      incrementVotes(data.get("id") as string);
      revalidatePath("/ui/topics/[id]", "page");
    } catch (error) {
      console.error("Database Error:", error);
      throw new Error("Failed to add vote.");
    }
  }
