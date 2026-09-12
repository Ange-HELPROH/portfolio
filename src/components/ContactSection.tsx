import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle, AlertCircle, Loader2, Copy, Check, Mail, Phone, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [copiedField, setCopiedField] = useState<string | null>(null);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  // URL de votre formulaire Formspree (ID : mbgjbezd)
  const formspreeEndpoint = 'https://formspree.io/f/mbgjbezd';
  
  const handleCopy = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    
    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        reset();
      } else {
        setStatus('error');
      }
      
      setTimeout(() => setStatus('idle'), 5000);
      
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire :", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#090914]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Me <span className="text-blue-500">Contacter</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Une question, une opportunité ou un projet ? N'hésitez pas à m'envoyer un message !
          </p>
        </div>

        {/* Bloc Coordonnées Directes */}
        <div className="bg-gray-50 dark:bg-[#161625] rounded-2xl p-6 md:p-8 mb-8 shadow-sm border border-gray-100 dark:border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Colonne Gauche : Email & Téléphone */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                  Coordonnées
                </h3>
                
                <div className="flex items-center justify-between p-3 bg-white dark:bg-[#0D0D1A] rounded-lg border border-gray-200 dark:border-gray-800 mb-3 group hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
                  <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <Mail size={18} className="text-blue-500" />
                    <span className="font-medium text-sm md:text-base">angeteufackjunior@gmail.com</span>
                  </div>
                  <button 
                    onClick={() => handleCopy('angeteufackjunior@gmail.com', 'email')}
                    className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                    aria-label="Copier l'email"
                    title="Copier l'email"
                  >
                    {copiedField === 'email' ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                  </button>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-white dark:bg-[#0D0D1A] rounded-lg border border-gray-200 dark:border-gray-800 group hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
                  <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <Phone size={18} className="text-blue-500" />
                    <span className="font-medium text-sm md:text-base">[À compléter : +33 6 XX XX XX XX]</span>
                  </div>
                  <button 
                    onClick={() => handleCopy('+33 6 00 00 00 00', 'phone')}
                    className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                    aria-label="Copier le téléphone"
                    title="Copier le téléphone"
                  >
                    {copiedField === 'phone' ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Colonne Droite : Réseaux & Localisation */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                  Réseaux & CV
                </h3>
                
                <div className="flex flex-wrap gap-3 mb-4">
                  <a href={portfolioData.hero.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#0D0D1A] border border-gray-200 dark:border-gray-800 rounded-lg hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 dark:hover:border-blue-500 transition-all text-sm font-medium text-gray-700 dark:text-gray-300">
                    <FaLinkedin size={16} /> LinkedIn
                  </a>
                  <a href={portfolioData.hero.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#0D0D1A] border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-800 hover:text-gray-900 dark:hover:text-white dark:hover:border-gray-600 transition-all text-sm font-medium text-gray-700 dark:text-gray-300">
                    <FaGithub size={16} /> GitHub
                  </a>
                </div>
                
                <a href="/CV_Ange_TEUFACK.pdf" target="_blank" className="flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2.5 bg-gray-900 dark:bg-gray-800 hover:bg-gray-800 dark:hover:bg-gray-700 text-white rounded-lg border border-gray-700 transition-colors text-sm font-medium">
                  <Download size={16} />
                  <span>Télécharger mon CV</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Formulaire */}
        <div className="bg-gray-50 dark:bg-[#161625] rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100 dark:border-gray-800">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nom */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Nom
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Jean Dupont"
                  className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-[#0D0D1A] border focus:ring-2 focus:ring-blue-500 outline-none transition-all ${
                    errors.name ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'
                  } text-gray-900 dark:text-white`}
                  {...register('name', { required: "Ce champ est obligatoire" })}
                />
                {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Adresse e-mail
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="jean.dupont@exemple.com"
                  className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-[#0D0D1A] border focus:ring-2 focus:ring-blue-500 outline-none transition-all ${
                    errors.email ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'
                  } text-gray-900 dark:text-white`}
                  {...register('email', { 
                    required: "Ce champ est obligatoire",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Adresse e-mail invalide"
                    }
                  })}
                />
                {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Votre message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Comment puis-je vous aider ?"
                className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-[#0D0D1A] border focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-y ${
                  errors.message ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'
                } text-gray-900 dark:text-white`}
                {...register('message', { 
                  required: "Ce champ est obligatoire",
                  minLength: {
                    value: 10,
                    message: "Le message doit contenir au moins 10 caractères"
                  }
                })}
              />
              {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>}
            </div>

            {/* Bouton de soumission (monochrome) */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full sm:w-auto px-8 py-3 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900/70 dark:bg-gray-800 dark:hover:bg-gray-700 text-white rounded-lg font-medium transition-all shadow-sm border border-gray-800 dark:border-gray-700 flex items-center justify-center gap-2"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  <span>Envoi en cours...</span>
                </>
              ) : (
                <>
                  <Send size={20} />
                  <span>Envoyer le message</span>
                </>
              )}
            </button>

            {/* Feedback Visuel */}
            {status === 'success' && (
              <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/30 rounded-lg flex items-center gap-3 text-green-700 dark:text-green-400">
                <CheckCircle size={20} />
                <p>Message envoyé, je vous répondrai rapidement.</p>
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30 rounded-lg flex items-center gap-3 text-red-700 dark:text-red-400">
                <AlertCircle size={20} />
                <p>Une erreur s'est produite lors de l'envoi. Veuillez réessayer plus tard ou m'écrire directement.</p>
              </div>
            )}
            
          </form>
        </div>
      </div>
    </section>
  );
}
