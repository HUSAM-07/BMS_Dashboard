import { ClipboardList, Hash, Globe, GitBranch, Flag, ThumbsUp } from 'lucide-react'
import { Link1Icon, FileIcon } from '@radix-ui/react-icons'

export const bentoItems = [
  {
    title: 'Tasks to do',
    description: 'Prioritize actions for maximum impact',
    icon: ClipboardList,
    className: 'md:col-span-2',
    link: '/tasks'
  },
  {
    title: 'Sponsorship Database',
    description: 'Centralized sponsor information for efficient management.',
    icon: Hash,
    className: 'md:col-span-1',
    link: '/sponsorship'
  },
  {
    title: 'Internal Tools',
    description: 'Streamlined internal processes for optimal efficiency',
    icon: Globe,
    className: 'md:col-span-1',
    link: '/tools'
  },
  {
    title: 'Accomplishments',
    description: 'Achievements and milestones by the team',
    icon: GitBranch,
    className: 'md:col-span-1',
    link: '/accomplishments'
  },
  {
    title: 'Creative Assets',
    description: 'Manage and showcase creative work effectively.',
    icon: Flag,
    className: 'md:col-span-1',
    link: '/assets'
  },
  {
    title: 'Feedback from Advisors',
    description: 'Documented feedback from experts and guidance for continuous improvement.',
    icon: ThumbsUp,
    className: 'md:col-span-1',
    link: '/feedback'
  },
]

export const sponsors = [
  { name: "TechCorp", contact: "john@techcorp.com", level: "Platinum", benefits: "Logo on car, VIP access" },
  { name: "MechaniX", contact: "sarah@mechanix.com", level: "Gold", benefits: "Logo on team uniforms" },
  { name: "Shirawi", contact: "mike@speedgear.com", level: "Silver", benefits: "Social media mentions" },
]

export const tools = [
  { name: "GitLab", icon: GitBranch, description: "Version control and project management", usage: "Daily by all team members" },
  { name: "Slack", icon: ThumbsUp, description: "Team communication platform", usage: "Constant use by all departments" },
  { name: "Google Calendar", icon: ClipboardList, description: "Schedule management", usage: "Used for all team events and deadlines" },
]

export const accomplishments = [
  { date: "2022-23", title: "2nd Place in Formula Student Netherlands", description: "Outperformed global teams in design and Business Pitch" },
]

export const assets = [
  { title: "Team Logo", description: "Official logo used on all materials", usage: "Used in 100% of marketing materials", image: "/public/banner.svg" },
  { title: "Sponsorship Logo", description: "Sponsorship emails drafted by Head of Business and Marketing", usage: "Should be used as a reference for sponsorship emails", image: "/public/banner.svg", fileLink: "/public/BMS Sponsorship Email Draft.pdf", fileLinkIcon: FileIcon },
  { title: "Promotional Video", description: "60-second BMS introduction animation", usage: "Viewed 10,000 times on social media", image: "/public/banner.svg", webLink: "https://drive.google.com/file/d/1kINId0Izv_TKaWznxwp7pFICu7LQfDPs/view?usp=sharing", webLinkIcon: Link1Icon },
  { title: "BMS 2022-23 Brochure", description: "Brochure for Sponsorships", usage: "Used to obtain sponsorships worth 20,000 AED", image: "/public/banner.svg", fileLink: "/public/Formula Student Brochure 2022-2023.pdf", fileLinkIcon: FileIcon },
]

export const feedbackThemes = [
  { theme: "Improve Team Communication", count: 5, action: "Implement weekly stand-up meetings" },
  { theme: "Enhance Sponsorship Outreach", count: 4, action: "Develop targeted sponsorship packages" },
  { theme: "Optimize Car Performance", count: 3, action: "Conduct more frequent testing sessions" },
]