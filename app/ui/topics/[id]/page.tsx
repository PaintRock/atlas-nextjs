export default async function Page({ params }: { params: { id: string } }) {
    const { id } = params;

    await new Promise((r) => setTimeout(r, 3000));
    
    return (
        <div> 
            Top Picks Page: {id} 
        </div>
    );
}
