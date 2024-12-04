import { Text, Image, RichText, types } from 'react-bricks/rsc'
import blockNames from '../../react-bricks-ui/blockNames'
import { bgColors } from '../../react-bricks-ui/colors'
import Section from '@/react-bricks/bricks/react-bricks-ui/shared/components/Section'
import Container from '@/react-bricks/bricks/react-bricks-ui/shared/components/Container'
import {
  LayoutProps,
  sectionDefaults,
} from '../../react-bricks-ui/LayoutSideProps'
import { Linkedin, Mail, PhoneCall } from 'lucide-react'

interface TeamMemberProps extends LayoutProps {
  image: types.IImageSource
  name: types.TextValue
  role: types.TextValue
  credentials: types.TextValue
  bio: types.TextValue
  email: string
  phone: string
  linkedIn: string
  specialties: types.TextValue
  experience: types.TextValue
}

const TeamMemberProfile: types.Brick<TeamMemberProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  image,
  name,
  role,
  credentials,
  bio,
  email,
  phone,
  linkedIn,
  specialties,
  experience,
}) => {
  return (
    <Container>
      <Section
        backgroundColor={backgroundColor}
        borderTop={borderTop}
        borderBottom={borderBottom}
      >
        <Container paddingTop={paddingTop} paddingBottom={paddingBottom}>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Profile Image */}
            <div className="w-full md:w-1/3">
              <Image
                propName="image"
                source={image}
                alt="Team Member"
                imageClassName="rounded-lg w-full aspect-[3/4] object-cover"
              />

              {/* Contact Information */}
              <div className="mt-6 space-y-3">
                {email && (
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center gap-2 text-gray-600 hover:text-[#E05D36] transition-colors"
                  >
                    <Mail size={20} />
                    <span>{email}</span>
                  </a>
                )}
                {phone && (
                  <a
                    href={`tel:${phone}`}
                    className="flex items-center gap-2 text-gray-600 hover:text-[#E05D36] transition-colors"
                  >
                    <PhoneCall size={20} />
                    <span>{phone}</span>
                  </a>
                )}
                {linkedIn && (
                  <a
                    href={linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-[#E05D36] transition-colors"
                  >
                    <Linkedin size={20} />
                    <span>LinkedIn Profile</span>
                  </a>
                )}
              </div>
            </div>

            {/* Profile Information */}
            <div className="w-full md:w-2/3 space-y-6">
              <div>
                <Text
                  propName="name"
                  value={name}
                  renderBlock={(props) => (
                    <h2
                      className="text-3xl font-bold text-gray-900 mb-2"
                      {...props.attributes}
                    >
                      {props.children}
                    </h2>
                  )}
                />
                <Text
                  propName="role"
                  value={role}
                  renderBlock={(props) => (
                    <h3
                      className="text-xl text-[#E05D36] mb-2"
                      {...props.attributes}
                    >
                      {props.children}
                    </h3>
                  )}
                />
                <Text
                  propName="credentials"
                  value={credentials}
                  renderBlock={(props) => (
                    <p
                      className="text-gray-600 font-medium"
                      {...props.attributes}
                    >
                      {props.children}
                    </p>
                  )}
                />
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  About
                </h4>
                <RichText
                  propName="bio"
                  value={bio}
                  renderBlock={(props) => (
                    <div
                      className="text-gray-600 prose max-w-none"
                      {...props.attributes}
                    >
                      {props.children}
                    </div>
                  )}
                  allowedFeatures={[
                    types.RichTextFeatures.Bold,
                    types.RichTextFeatures.Italic,
                    types.RichTextFeatures.Highlight,
                  ]}
                />
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Areas of Expertise
                </h4>
                <RichText
                  propName="specialties"
                  value={specialties}
                  renderBlock={(props) => (
                    <div className="text-gray-600" {...props.attributes}>
                      {props.children}
                    </div>
                  )}
                  allowedFeatures={[
                    types.RichTextFeatures.UnorderedList,
                    types.RichTextFeatures.Bold,
                  ]}
                />
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Experience
                </h4>
                <RichText
                  propName="experience"
                  value={experience}
                  renderBlock={(props) => (
                    <div className="text-gray-600" {...props.attributes}>
                      {props.children}
                    </div>
                  )}
                  allowedFeatures={[
                    types.RichTextFeatures.Bold,
                    types.RichTextFeatures.UnorderedList,
                  ]}
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </Container>
  )
}

TeamMemberProfile.schema = {
  name: blockNames.TeamMemberProfile,
  label: 'Team Member Profile',
  category: 'RNPL sections',
  previewImageUrl: `/bricks-preview-images/team-member.png`,

  getDefaultProps: () => ({
    ...sectionDefaults,
    backgroundColor: bgColors.WHITE.value,
    image: {
      src: '/api/placeholder/600/800',
      placeholderSrc: '/api/placeholder/600/800',
      srcSet: '',
      alt: 'Team member photo',
      seoName: 'team-member',
    },
    name: [{ type: 'paragraph', children: [{ text: 'Jane Smith' }] }],
    role: [
      { type: 'paragraph', children: [{ text: 'Senior Real Estate Agent' }] },
    ],
    credentials: [
      {
        type: 'paragraph',
        children: [{ text: 'Licensed Real Estate Broker, CRS, ABR' }],
      },
    ],
    bio: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'With over 15 years of experience in real estate and property development, Jane has helped countless families find their dream homes and maximize their property investments. Her expertise in market analysis and negotiation has consistently delivered outstanding results for her clients.',
          },
        ],
      },
    ],
    email: 'jane.smith@example.com',
    phone: '(555) 123-4567',
    linkedIn: 'https://www.linkedin.com/in/janesmith',
    specialties: [
      {
        type: 'paragraph',
        children: [{ text: '• Luxury Home Sales' }],
      },
      {
        type: 'paragraph',
        children: [{ text: '• Investment Properties' }],
      },
      {
        type: 'paragraph',
        children: [{ text: '• Property Development' }],
      },
      {
        type: 'paragraph',
        children: [{ text: '• Market Analysis' }],
      },
    ],
    experience: [
      {
        type: 'paragraph',
        children: [{ text: '• 15+ years in Real Estate' }],
      },
      {
        type: 'paragraph',
        children: [{ text: '• $100M+ in Sales Volume' }],
      },
      {
        type: 'paragraph',
        children: [{ text: '• Top 1% of Realtors Nationwide' }],
      },
    ],
  }),

  sideEditProps: [
    {
      groupName: 'Contact Information',
      defaultOpen: true,
      props: [
        {
          name: 'email',
          label: 'Email Address',
          type: types.SideEditPropType.Text,
        },
        {
          name: 'phone',
          label: 'Phone Number',
          type: types.SideEditPropType.Text,
        },
        {
          name: 'linkedIn',
          label: 'LinkedIn URL',
          type: types.SideEditPropType.Text,
        },
      ],
    },
  ],
}

export default TeamMemberProfile
