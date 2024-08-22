'use client';
import { Navbar } from '@/widgets/Navbar';
import { FeedbackSideButton } from '@/features/FeedbackByExternalSource';
import cls from './Privacy.module.scss';
import bgPicture from '@/shared/assets/images/backgrounds/background.webp';
import { withBackgroundImage } from '@/shared/lib/hocs/withBackgroundImage';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ScrollTop } from '@/features/ScrollTop';
import { WikiContentWithSidebar } from '@/shared/ui/WikiContentWithSidebar';
import { Footer } from '@/widgets/Footer';

interface Section {
  id: string;
  label: string;
  description: string;
  image: string;
  imageAlt: string;
  sidebarLogo: string;
  sidebarLogoAlt: string;
}

export type Props = {
  sections: Section[];
};

const PrivacyPage = (props: Props) => {
  const { sections = [] } = props;

  return (
    <div className={classNames(cls.pageContainer)}>
      <Navbar overlaid={true} navBarType={'Privacy'} />

      <WikiContentWithSidebar sections={sections} />
      <div>
        <FeedbackSideButton />
      </div>
      <Footer />
      <ScrollTop />
    </div>
  );
};

export default withBackgroundImage({
  alt: 'Tile bg image',
  imagePath: bgPicture as unknown as string,

  // @ts-ignore
})(PrivacyPage);
