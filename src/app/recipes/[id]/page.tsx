import Recipe from '@/src/components/recipe'

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
    console.log(params, "params");
    const {id} = await params;
  return (
    <div>
        <Recipe id={Number(id)}/>
    </div>
  )
}

export default page