import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Contact = () => {
  const { currentTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
  content: "+212 778 353 067 / +212 778 353 066",
      subtitle: "Lun-Ven: 8h-18h"
    },
    {
      icon: Mail,
      title: "Email",
  content: "contact@leonaprom.com",
      subtitle: "Réponse sous 24h"
    },
    {
      icon: MapPin,
      title: "Adresse",
  content: "Al Massar No 837 Appt N° 3 Route De Safi - Marrakech",
      subtitle: "Sur rendez-vous"
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "Lun-Ven: 8h-18h",
      subtitle: "Sam: 9h-13h"
    }
  ];

  return (
    <section 
      id="contact" 
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: currentTheme.colors.surface }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-5 animate-pulse blur-3xl"
          style={{ backgroundColor: currentTheme.colors.primary }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-5 animate-pulse delay-1000 blur-3xl"
          style={{ backgroundColor: currentTheme.colors.accent }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-1000">
          <h2 
            className="text-4xl lg:text-6xl font-bold mb-6"
            style={{ color: currentTheme.colors.text }}
          >
            Contactez-Nous
          </h2>
          <div 
            className="w-24 h-1 mx-auto mb-6 rounded-full"
            style={{ backgroundColor: currentTheme.colors.accent }}
          />
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ color: currentTheme.colors.textSecondary }}
          >
            Vous avez un projet de sécurité ? N'hésitez pas à nous contacter pour 
            une consultation gratuite et un devis personnalisé.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div 
            className="rounded-3xl shadow-2xl p-10 backdrop-blur-md border animate-in fade-in slide-in-from-left duration-1000 delay-300"
            style={{
              backgroundColor: currentTheme.colors.background,
              borderColor: `${currentTheme.colors.primary}20`
            }}
          >
            <h3 
              className="text-3xl font-bold mb-8"
              style={{ color: currentTheme.colors.text }}
            >
              Demander un Devis
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-semibold mb-3"
                    style={{ color: currentTheme.colors.text }}
                  >
                    Nom Complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-5 py-4 border-2 rounded-xl transition-all duration-300 focus:scale-105 backdrop-blur-sm"
                    style={{
                      borderColor: `${currentTheme.colors.primary}30`,
                      backgroundColor: `${currentTheme.colors.surface}80`,
                      color: currentTheme.colors.text
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = currentTheme.colors.primary;
                      e.target.style.boxShadow = `0 0 0 3px ${currentTheme.colors.primary}20`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = `${currentTheme.colors.primary}30`;
                      e.target.style.boxShadow = 'none';
                    }}
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label 
                    htmlFor="phone" 
                    className="block text-sm font-semibold mb-3"
                    style={{ color: currentTheme.colors.text }}
                  >
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-5 py-4 border-2 rounded-xl transition-all duration-300 focus:scale-105 backdrop-blur-sm"
                    style={{
                      borderColor: `${currentTheme.colors.primary}30`,
                      backgroundColor: `${currentTheme.colors.surface}80`,
                      color: currentTheme.colors.text
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = currentTheme.colors.primary;
                      e.target.style.boxShadow = `0 0 0 3px ${currentTheme.colors.primary}20`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = `${currentTheme.colors.primary}30`;
                      e.target.style.boxShadow = 'none';
                    }}
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-semibold mb-3"
                  style={{ color: currentTheme.colors.text }}
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-5 py-4 border-2 rounded-xl transition-all duration-300 focus:scale-105 backdrop-blur-sm"
                  style={{
                    borderColor: `${currentTheme.colors.primary}30`,
                    backgroundColor: `${currentTheme.colors.surface}80`,
                    color: currentTheme.colors.text
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = currentTheme.colors.primary;
                    e.target.style.boxShadow = `0 0 0 3px ${currentTheme.colors.primary}20`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = `${currentTheme.colors.primary}30`;
                    e.target.style.boxShadow = 'none';
                  }}
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              
              <div>
                <label 
                  htmlFor="subject" 
                  className="block text-sm font-semibold mb-3"
                  style={{ color: currentTheme.colors.text }}
                >
                  Type de Service
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-5 py-4 border-2 rounded-xl transition-all duration-300 focus:scale-105 backdrop-blur-sm"
                  style={{
                    borderColor: `${currentTheme.colors.primary}30`,
                    backgroundColor: `${currentTheme.colors.surface}80`,
                    color: currentTheme.colors.text
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = currentTheme.colors.primary;
                    e.target.style.boxShadow = `0 0 0 3px ${currentTheme.colors.primary}20`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = `${currentTheme.colors.primary}30`;
                    e.target.style.boxShadow = 'none';
                  }}
                  value={formData.subject}
                  onChange={handleInputChange}
                >
                  <option value="">Sélectionner un service</option>
                  <option value="videosurveillance">Vidéosurveillance</option>
                  <option value="alarme">Système d'alarme</option>
                  <option value="controle-acces">Contrôle d'accès</option>
                  <option value="interphone">Interphone/Portier</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              
              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-semibold mb-3"
                  style={{ color: currentTheme.colors.text }}
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-5 py-4 border-2 rounded-xl transition-all duration-300 focus:scale-105 backdrop-blur-sm resize-none"
                  style={{
                    borderColor: `${currentTheme.colors.primary}30`,
                    backgroundColor: `${currentTheme.colors.surface}80`,
                    color: currentTheme.colors.text
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = currentTheme.colors.primary;
                    e.target.style.boxShadow = `0 0 0 3px ${currentTheme.colors.primary}20`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = `${currentTheme.colors.primary}30`;
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="Décrivez votre projet de sécurité..."
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full text-white py-5 rounded-2xl font-bold transition-all duration-500 flex items-center justify-center space-x-3 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden group"
                style={{ backgroundColor: currentTheme.colors.primary }}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${currentTheme.colors.primary}, ${currentTheme.colors.accent})`
                  }}
                />
                <Send className="h-6 w-6 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                <span className="relative z-10">Envoyer la Demande</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-in fade-in slide-in-from-right duration-1000 delay-500">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 backdrop-blur-md border group cursor-pointer"
                style={{
                  backgroundColor: currentTheme.colors.background,
                  borderColor: `${currentTheme.colors.primary}20`,
                  animationDelay: `${index * 200}ms`
                }}
              >
                <div className="flex items-start space-x-6">
                  <div 
                    className="flex items-center justify-center w-16 h-16 rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 relative"
                    style={{ backgroundColor: `${currentTheme.colors.primary}15` }}
                  >
                    <info.icon 
                      className="h-8 w-8 transition-colors duration-300" 
                      style={{ color: currentTheme.colors.primary }}
                    />
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                      style={{ boxShadow: `0 0 20px ${currentTheme.colors.primary}60` }}
                    />
                  </div>
                  <div>
                    <h4 
                      className="font-bold text-xl mb-2"
                      style={{ color: currentTheme.colors.text }}
                    >
                      {info.title}
                    </h4>
                    <p 
                      className="text-lg font-semibold mb-1"
                      style={{ color: currentTheme.colors.primary }}
                    >
                      {info.content}
                    </p>
                    <p 
                      className="text-sm"
                      style={{ color: currentTheme.colors.textSecondary }}
                    >
                      {info.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Call to Action */}
            <div 
              className="rounded-3xl p-10 text-white shadow-2xl backdrop-blur-md border transition-all duration-500 hover:scale-105 relative overflow-hidden group"
              style={{
                backgroundColor: currentTheme.colors.primary,
                borderColor: `${currentTheme.colors.primary}30`
              }}
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${currentTheme.colors.primary}, ${currentTheme.colors.accent})`
                }}
              />
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-4">Urgence Sécurité ?</h4>
                <p className="mb-8 opacity-90">
                Pour les interventions d'urgence ou les pannes de système, 
                contactez-nous immédiatement.
                </p>
                <button 
                  className="text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105 shadow-xl"
                  style={{ backgroundColor: currentTheme.colors.accent }}
                >
                Appel d'Urgence
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;