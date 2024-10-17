import React from 'react'

export default function ResearchPage() {
    return (
        <section className="max-w-2xl mx-auto py-8">
            <h1 className="text-3xl font-bold mb-8">Research</h1>
            <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Ongoing Research</h2>
                <h3 className="text-xl mb-3">Automatic Task Generation for LLM Agents</h3>
                <p className="mb-4">
                    Developing a scalable method for generating a dataset of realistic web tasks for training AI web agents.
                </p>
            </div>
            <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Past Research</h2>
                <h3 className="text-xl mb-3">(EMNLP 2023) MAF: Multi-Aspect Feedback for Improving Reasoning in Large Language Models</h3>
                <p className="mb-4">
                    Multi-Aspect Feedback is an iterative refinement framework designed to enhance language models' reasoning abilities by addressing a variety of error types. The method incorporates multiple feedback modules, including frozen language models and external tools, each targeting specific categories of errors such as hallucinations, incorrect reasoning steps, and mathematical inaccuracies. Experimental results show improvements of up to 20% in mathematical reasoning and 18% in logical entailment tasks.
                </p>
                <a
                    href="https://aclanthology.org/2023.emnlp-main.407/"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Read the paper
                </a>
            </div>
        </section>
    )
}
