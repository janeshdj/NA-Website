import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import storiesData from '../../data/stories.json';
import { Testimonial } from '../../types';
import { Quote, MapPin } from 'lucide-react';

export const PatientStories: React.FC = () => {
  const stories: Testimonial[] = storiesData;

  return (
    <section className="py-16 sm:py-24 bg-neithal-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="PATIENT JOURNEYS"
          heading="Every journey is personal."
          supporting="Authentic experiences shared by patients who received personalized Ayurvedic care and Panchakarma therapies at Neithal."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <Card key={story.id} className="p-8 flex flex-col justify-between h-full relative">
              <div>
                <Quote className="w-8 h-8 text-neithal-gold-500/30 mb-4" />

                <p className="font-serif text-lg italic text-neithal-green-950 leading-relaxed mb-4">
                  "{story.quote}"
                </p>

                <p className="text-xs text-neithal-muted leading-relaxed mb-6">
                  {story.story}
                </p>
              </div>

              <div className="pt-4 border-t border-neithal-border/40 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-neithal-cream-200 border border-neithal-gold-500/40 flex items-center justify-center font-serif text-base font-bold text-neithal-green-950">
                    {story.initials}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-neithal-green-950">
                      Patient {story.initials}
                    </h4>
                    <p className="text-[11px] text-neithal-muted flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-neithal-gold-500" />
                      <span>{story.location}</span>
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-neithal-gold-500 bg-neithal-gold-100 px-2 py-0.5 rounded-full">
                  Verified Visit
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
