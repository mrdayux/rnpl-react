import { types } from 'react-bricks/rsc'

import HeroUnit from './custom/MyHeroUnit'
import Pokemon from './custom/Pokemon'
import reactBricksUITheme from './react-bricks-ui'
import RNPLHero from '@/react-bricks/bricks/rnpl/HeroSection/RNPLHero'
import WorkShowcaseItem from '@/react-bricks/bricks/rnpl/WorkShowcaseSection/WorkShowcaseItem'
import WorkShowcase from '@/react-bricks/bricks/rnpl/WorkShowcaseSection/WorkShowcase'
import ServicesShowcase from '@/react-bricks/bricks/rnpl/ServiceShowcaseSection/ServicesShowcase'
import ServiceCard from '@/react-bricks/bricks/rnpl/ServiceShowcaseSection/ServiceCard'
import ProfessionalsCTA from '@/react-bricks/bricks/rnpl/CTA/ProfessionalsCTA'
import ServicesWithCarousel, {
  ServiceItem,
} from '@/react-bricks/bricks/rnpl/Services/ServicesWithCarousel'
import LogoItem from '@/react-bricks/bricks/rnpl/Services/LogoItem'
import FinancialServices, {
  FinancialServiceItem,
} from '@/react-bricks/bricks/rnpl/Services/FinancialServices'
import AgentShowcase, {
  AgentCard,
} from '@/react-bricks/bricks/rnpl/AgentShowcase/AgentShowcase'
import ConstructionHelp from '@/react-bricks/bricks/rnpl/ZuminConstructionSection/ConstructionHelp'
import ServicesList, {
  ConstructionServiceItem,
} from '@/react-bricks/bricks/rnpl/ZuminConstructionSection/ServicesList'
import BeforeAfterCard from '@/react-bricks/bricks/rnpl/ZuminConstructionSection/BeforeAfterCard'
import BlogCard from '@/react-bricks/bricks/rnpl/ReviewsAndTrends/BlogCard'
import ReviewCard from '@/react-bricks/bricks/rnpl/ReviewsAndTrends/ReviewCard'
import TrendsGallery from '@/react-bricks/bricks/rnpl/ReviewsAndTrends/TrendsGallery'
import Footer from '@/react-bricks/bricks/rnpl/Footer/Footer'
import {
  FooterMenuItem,
  FooterSocialIcon,
} from '@/react-bricks/bricks/rnpl/Footer/FooterMenuItem'
import ColumnLayout from '@/react-bricks/bricks/rnpl/shared/ColumnLayout'
import Column from '@/react-bricks/bricks/rnpl/shared/Column'
import GridLayout from '@/react-bricks/bricks/rnpl/shared/GridLayout'
import GridItem from '@/react-bricks/bricks/rnpl/shared/GridItem'
import HeadingOne from '@/react-bricks/bricks/rnpl/shared/Typography/HeadingOne'
import HeadingTwo from '@/react-bricks/bricks/rnpl/shared/Typography/HeadingTwo'
import HeadingThree from '@/react-bricks/bricks/rnpl/shared/Typography/HeadingThree'
import HeadingFour from '@/react-bricks/bricks/rnpl/shared/Typography/HeadingFour'
import HeadingFive from '@/react-bricks/bricks/rnpl/shared/Typography/HeadingFive'
import OrderedList, {
  OrderedListItem,
} from '@/react-bricks/bricks/rnpl/shared/Typography/OrderedList'
import UnorderedList, {
  UnorderedListItem,
} from '@/react-bricks/bricks/rnpl/shared/Typography/UnorderedList'
import BlogLink from '@/react-bricks/bricks/rnpl/shared/BlogLink'
import RNPLParagraph from '@/react-bricks/bricks/rnpl/shared/Typography/Paragraph'
import ProjectGallery, {
  ProjectItem,
} from '@/react-bricks/bricks/rnpl/CustomBricks/ProjectGallery'
import EventGrid, {
  EventCard,
} from '@/react-bricks/bricks/rnpl/CustomBricks/EventCard'
import CostEstimatorForm from '@/react-bricks/bricks/rnpl/CustomBricks/CostEstimationForm/CostEstimationForm'
import {
  ProjectTypeBrick,
  QualityLevelBrick,
  TimeFrameBrick,
} from '@/react-bricks/bricks/rnpl/CustomBricks/CostEstimationForm/repeaterItems'
import TeamMemberProfile from '@/react-bricks/bricks/rnpl/CustomBricks/TeamMemberProfile'
import FeatureCards from '@/react-bricks/bricks/rnpl/CustomBricks/Features/FeatureCards'
import FeatureCardItem from '@/react-bricks/bricks/rnpl/CustomBricks/Features/FeatureCardItem'
import CTASection from '@/react-bricks/bricks/rnpl/CustomBricks/CTASection'
import CustomServiceOverview from '@/react-bricks/bricks/rnpl/CustomBricks/CustomService/CustomServiceOverview'
import CustomServiceItem from '@/react-bricks/bricks/rnpl/CustomBricks/CustomService/CustomServiceItem'
import ServiceBulletPoint from '@/react-bricks/bricks/rnpl/CustomBricks/CustomService/ServiceBulletPoint'

const bricks: types.Theme[] = [
  reactBricksUITheme, // React Bricks UI
  {
    themeName: 'Default',
    categories: [
      {
        categoryName: 'Custom bricks',
        bricks: [HeroUnit, Pokemon], // Custom Bricks
      },
    ],
  },
  {
    themeName: 'RNPL',
    categories: [
      {
        categoryName: 'Hero Section',
        bricks: [RNPLHero],
      },
      {
        categoryName: 'Showcases',
        bricks: [WorkShowcase, WorkShowcaseItem],
      },
      {
        categoryName: 'Services Showcase',
        bricks: [ServicesShowcase, ServiceCard],
      },
      {
        categoryName: 'CTA',
        bricks: [ProfessionalsCTA],
      },
      {
        categoryName: 'Services',
        bricks: [
          ServicesWithCarousel,
          ServiceItem,
          LogoItem,
          FinancialServices,
          FinancialServiceItem,
        ],
      },
      {
        categoryName: 'Agent Showcase',
        bricks: [AgentShowcase, AgentCard],
      },
      {
        categoryName: 'Construction Help',
        bricks: [
          ConstructionHelp,
          ServicesList,
          ConstructionServiceItem,
          BeforeAfterCard,
        ],
      },
      {
        categoryName: 'Trends & Reviews',
        bricks: [BlogCard, ReviewCard, TrendsGallery],
      },
      {
        categoryName: 'Rnpl Layout',
        bricks: [Footer, FooterMenuItem, FooterSocialIcon],
      },
      {
        categoryName: 'Rnpl Layout',
        bricks: [ColumnLayout, Column, GridLayout, GridItem],
      },
      {
        categoryName: 'Typography',
        bricks: [
          HeadingOne,
          HeadingTwo,
          HeadingThree,
          HeadingFour,
          HeadingFive,
          RNPLParagraph,
        ],
      },
      {
        categoryName: 'Text bricks',
        bricks: [
          OrderedList,
          UnorderedList,
          BlogLink,
          OrderedListItem,
          UnorderedListItem,
        ],
      },
      {
        categoryName: 'Custom Bricks',
        bricks: [
          ProjectGallery,
          ProjectItem,
          EventGrid,
          EventCard,
          // CostEstimatorForm,
          // ProjectTypeBrick,
          // QualityLevelBrick,
          TimeFrameBrick,
          TeamMemberProfile,
          FeatureCards,
          FeatureCardItem,
          CTASection,
        ],
      },
      {
        categoryName: 'Custom Services',
        bricks: [CustomServiceOverview, CustomServiceItem, ServiceBulletPoint],
      },
    ],
  },
]

export default bricks
