import CreateTopicForm from "@/components/CreateTopicForm";


export default function Page() {
    return (
    <div>
        <h1 className={`mb-4 text-xl md:text-2x1`}>
        New Top Picks Page
        </h1>
        <CreateTopicForm />
    </div>
    );
}