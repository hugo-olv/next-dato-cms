
export const CourseHeaderRecord = ({ details }) => {
    const sentences = details.description.split('.')
    sentences.splice(sentences.length - 1, 1)
    console.log(sentences)


    return (
        <div className="bg-gray-200 py-20 px-10 flex-col items-center">
            <h1 className="text-2x text-center text-gray-600 font-bold">
                {details.smallTitle}
                <span className="block text-gray-900 text-6xl font-bold mb-10">
                    {details.bigTitle}
                </span>
            </h1>
            {sentences.map((sentence, index) => <p key={index} className="max-w-lg text-gray-500 text-lg mx-auto text-center">{sentence}.</p>)}
        </div>
    )
}