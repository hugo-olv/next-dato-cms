import { CalloutRecord, CourseHeaderRecord, LearnSectionRecord, PricingSectionRecord } from "."

export const CourseSection = ({ details }) => {
    if (details.__typename === 'CourseHeaderRecord') {
        return <CourseHeaderRecord details={details} />
    }
    else if (details.__typename === 'CalloutRecord') {
        return <CalloutRecord details={details} />
    }
    else if (details.__typename === 'LearnSectionRecord') {
        return <LearnSectionRecord details={details} />
    }
    else if (details.__typename === 'PricingSectionRecord') {
        return <PricingSectionRecord details={details} />
    }

    return (
        <div>
            <h2>{details.title}</h2>
            <p>{details.description}</p>
        </div>
    )
}