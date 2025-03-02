export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    // Await the params before using them
    const resolvedParams = await params;
    const { id } = resolvedParams;
  
    await new Promise((r) => setTimeout(r, 3000));
    
    return (
      <div> 
        Top Picks Page: {resolvedParams.id} 
      </div>
    );
  }
  