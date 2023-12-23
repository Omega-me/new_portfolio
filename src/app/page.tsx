import { HomePageProps, prefetchQuery } from './HomePage.utils';
import { HomeModule } from '@/containers/modules';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/common/styles/animate.css';
import '@/common/styles/flaticon.css';
import '@/common/styles/font-awesome.min.css';
import '@/common/styles/style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomePage = async (props: HomePageProps) => {
  const queryClient = await prefetchQuery(props);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HomeModule />
    </HydrationBoundary>
  );
};

export default HomePage;
