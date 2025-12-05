import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  areas: string[];
  tools: string[];
}

function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'AI-Powered Campus Knowledge Assistant',
      description: 'Campus chatbot trained on institution-specific datasets for automated Q&A.',
      areas: ['NLP', 'LLMs', 'Fine-Tuning', 'Backend'],
      tools: ['Vertex AI (PaLM 2 / Gemini)', 'Dialogflow CX', 'Google Cloud Storage', 'BigQuery', 'Cloud Run', 'Firestore']
    },
    {
      id: 2,
      title: 'Advanced Threat Detection using Machine Learning',
      description: 'Real-time cybersecurity threat detection system leveraging ML on network traffic and logs.',
      areas: ['Cybersecurity', 'ML', 'Anomaly Detection', 'Cloud Security'],
      tools: ['Vertex AI AutoML', 'BigQuery ML', 'Cloud Armor', 'Chronicle Security Operations', 'Pub/Sub', 'Dataflow']
    },
    {
      id: 3,
      title: 'Vision-Language Model for Medical Image Captioning',
      description: 'Generate descriptive captions for medical imaging (X-rays, MRIs) using multimodal AI.',
      areas: ['Computer Vision', 'NLP', 'Healthcare AI', 'Deep Learning'],
      tools: ['Vertex AI (Vision API, Custom Models)', 'Cloud Healthcare API', 'TensorFlow on Vertex AI', 'Cloud Storage', 'BigQuery']
    },
    {
      id: 4,
      title: 'Real-Time Sentiment Analysis for Social Media',
      description: 'Stream processing pipeline to analyze and visualize sentiment from social media feeds in real-time.',
      areas: ['NLP', 'Streaming Data', 'Analytics', 'Data Visualization'],
      tools: ['Natural Language API', 'Pub/Sub', 'Dataflow', 'BigQuery', 'Looker Studio / Data Studio', 'Cloud Functions']
    },
    {
      id: 5,
      title: 'Predictive Maintenance for IoT Devices',
      description: 'ML-based system to predict equipment failures using IoT sensor data.',
      areas: ['IoT', 'Time Series Analysis', 'Predictive ML', 'Edge Computing'],
      tools: ['Vertex AI (AutoML Tables, Forecasting)', 'IoT Core', 'Pub/Sub', 'Dataflow', 'BigQuery', 'Cloud Functions']
    },
    {
      id: 6,
      title: 'Automated Document Processing System',
      description: 'Extract, classify, and process structured data from unstructured documents (PDFs, scanned images).',
      areas: ['OCR', 'NLP', 'Document AI', 'Automation'],
      tools: ['Document AI', 'Vision API', 'Natural Language API', 'Cloud Storage', 'Cloud Functions', 'Firestore']
    },
    {
      id: 7,
      title: 'Personalized Recommendation Engine',
      description: 'Build a scalable recommendation system for e-commerce or content platforms using collaborative filtering.',
      areas: ['Recommendation Systems', 'ML', 'Big Data', 'APIs'],
      tools: ['Vertex AI (Recommendations AI)', 'BigQuery ML', 'Dataflow', 'Cloud Run', 'Firestore']
    },
    {
      id: 8,
      title: 'Generative AI for Creative Content',
      description: 'Create applications for text, image, or code generation using generative models (Gemini, Imagen).',
      areas: ['Generative AI', 'Creative Tech', 'Multimodal AI', 'API Integration'],
      tools: ['Vertex AI (Gemini Pro, Imagen)', 'Cloud Storage', 'Cloud Run', 'Firebase', 'App Engine']
    }
  ];

  const toggleProject = (id: number) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Approved Research Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each project is mapped to specific Google Cloud tools and domains
          </p>
        </div>

        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => toggleProject(project.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-start space-x-4">
                    <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-lg">
                      {project.id}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.areas.map((area, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {expandedProject === project.id ? (
                    <ChevronUp className="w-6 h-6 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </div>
              </button>

              {expandedProject === project.id && (
                <div className="px-6 pb-6 pt-2 bg-gray-50 border-t border-gray-200">
                  <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center">
                    <span className="text-lg mr-2">🛠️</span>
                    Google Cloud Tools Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="bg-white border border-green-300 text-green-700 text-sm font-medium px-4 py-2 rounded-lg shadow-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
