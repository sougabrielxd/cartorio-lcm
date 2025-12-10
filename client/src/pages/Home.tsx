import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import HeroPage from '@/pages/sections/HeroPage';
import AttributionsPage from '@/pages/sections/AttributionsPage';

import ServicesDetailPage from '@/pages/sections/ServicesDetailPage';
import ProcessTrackingPage from '@/pages/sections/ProcessTrackingPage';
import AttendanceChannelsDetailPage from '@/pages/sections/AttendanceChannelsDetailPage';


export default function Home() {
  return (
    <div className="w-full min-h-screen bg-background">
      <Header />
      <main>
        <HeroPage />
        <AttributionsPage />

        <ServicesDetailPage />
        <ProcessTrackingPage />
        <AttendanceChannelsDetailPage />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
