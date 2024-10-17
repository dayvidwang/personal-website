import Image from 'next/image'
import React from 'react'
import { experienceData } from '../data/experience'

export default function ExperiencePage() {
    return (
        <section className="max-w-2xl mx-auto py-8">
            <h1 className="text-3xl font-bold mb-8">Experience</h1>
            <ul className="space-y-8">
                {experienceData.map((item, index) => (
                    <li key={index} className="flex flex-col items-start text-left">
                        <Image
                            src={item.logo}
                            alt={`${item.company} logo`}
                            width={100}
                            height={100}
                            className="object-contain"
                        />
                        <div>
                            <h2 className="text-xl font-semibold">{item.title}</h2>
                            <p className="text-gray-600 mb-2">{item.company} | {item.period}</p>
                            <p className="text-gray-700">{item.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}
