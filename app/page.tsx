import Image from 'next/image'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import { experienceData } from './data/experience'

export default function Page() {
  return (
    <div className="max-w-2xl mx-auto py-8">
      <section id="about" className="mb-16">
        <div className="flex items-center mb-6">
          <Image
            src="/images/headshot.png"
            alt="David Wang"
            width={150}
            height={150}
            className="rounded-lg mr-6"
          />
          <div>
            <h1 className="text-3xl font-bold mb-2">
              David Wang
            </h1>
            <h2 className="text-xl text-gray-600 mb-2">
              Software Engineer, NLP Researcher
            </h2>
            <p className="text-gray-600 mb-2">
              david.wang5766@gmail.com
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/dayvidwang" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl text-gray-700 hover:text-gray-900" />
              </a>
              <a href="https://linkedin.com/in/dayvidwang" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl text-gray-700 hover:text-gray-900" />
              </a>
              <a href="mailto:david.wang5766@gmail.com">
                <FaEnvelope className="text-2xl text-gray-700 hover:text-gray-900" />
              </a>
            </div>
          </div>
        </div>
        <p className="text-lg leading-relaxed">
          👋 Hi! I'm David. I'm currently a senior at UC Santa Barbara studying Computer Science and one of the founding ML Engineers at <a href="https://alphadesign.ai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Alpha Design</a> to build AI agents for chip design.
          <br /><br />
          I'm also an undergraduate researcher in the UCSB NLP Lab, where I'm currently working on generating synthetic datasets for training and evaluating AI agents. My research interests lie primarily in Machine Learning, Natural Language Processing, and Distributed Systems.
          <br /><br />
          In the past I've worked as a Software Engineer Intern at GlossGenius, Snowflake, C3.AI, and Viasat.
          <br /><br />
          In my free time I like to go rock climbing, bake bread, play board games, eat good food, and go on runs!
        </p>
      </section>

      <section id="experience" className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <ul className="space-y-8">
          {experienceData.map((item, index) => (
            <li key={index} className="flex items-start">
              <Image
                src={item.logo}
                alt={`${item.company} logo`}
                width={64}
                height={64}
                className="object-contain mr-4 rounded-sm"
              />
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600 mb-2">{item.company} | {item.period}</p>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="research" className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Research</h2>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Ongoing Research</h3>
          <h4 className="text-xl mb-3">Automatic Task Generation for LLM Agents</h4>
          <p className="mb-4">
            Developing a scalable method for generating a dataset of realistic web tasks for training and evaluating AI web agents.
          </p>
          {/* <a
            href="/research/autotaskgen"
            className="text-blue-600 hover:underline"
          >
            Read the preprint
          </a> */}
        </div>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Past Research</h3>
          <h4 className="text-xl mb-3">(EMNLP 2023) MAF: Multi-Aspect Feedback for Improving Reasoning in Large Language Models</h4>
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
    </div>
  )
}
