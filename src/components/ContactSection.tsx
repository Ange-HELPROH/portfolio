import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    
    // URL de votre formulaire Formspree (ID : mbgjbezd)
    const formspreeEndpoint = 'https://formspree.io/f/mbgjbezd';
    
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
      
      // Remettre l'état à idle après 5 secondes
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
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Une question, une opportunité ou un projet ? N'hésitez pas à m'envoyer un message !
          </p>
        </div>

        {/* Formulaire */}
        <div className="bg-gray-50 dark:bg-[#161625] rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100 dark:border-gray-800">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nom */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Nom complet
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

            {/* Bouton de soumission */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/70 text-white rounded-lg font-medium transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
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
