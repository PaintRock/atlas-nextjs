export default async function Page({ params }: { params: { id: string } }) {
    const { id } = params;
    
    return (
        <div> 
            Top Picks Page: {id} 
        </div>
    );
}
