export interface Blog {
  slug: string
  title: string
  description: string
  image: string
  category: string
  author: string
  date: string
  content: string
}

export const blogs: Blog[] = [
  {
    slug: 'outdoor-experiences',
    title: 'Why Outdoor Experiences Matter More Than Ever',
    description:
      'Discover how reconnecting with nature improves mental wellbeing, creativity, and family bonding in a digital-first world.',
    image: '/beltCarousel1.jpeg',
    category: 'Nature',
    author: 'Ikigai Farm',
    date: 'June 2026',
    content: `
**Reconnecting With Nature**

Modern life keeps us constantly connected to screens, notifications, and stress. Spending time outdoors allows people to slow down and reconnect with themselves.

**Mental Wellness**

Nature has proven benefits for reducing stress, anxiety, and burnout. Outdoor environments improve focus, emotional balance, and creativity.

**Family Bonding**

Shared experiences in natural settings create stronger memories and deeper relationships between families and friends.

**Why Ikigai Farm Exists**

Ikigai Farm was built to create meaningful outdoor experiences where people can celebrate, adventure, and reconnect with nature.
    `,
  },

  {
    slug: 'farm-birthday-guide',
    title: 'The Perfect Farm Birthday Party Guide',
    description:
      'Planning a memorable birthday? Explore activities, decorations, food ideas, and unique experiences for kids and families.',
    image: '/KidsParty1.jpeg',
    category: 'Events',
    author: 'Ikigai Farm',
    date: 'June 2026',
    content: `
**Why Farm Parties Are Special**

Farm birthday parties combine outdoor adventure, freedom, and unforgettable experiences.

**Activities Kids Love**

Ziplining, ATV rides, obstacle courses, treasure hunts, and interactive farm activities make birthdays exciting.

**Food & Decorations**

Fresh farm-style food and natural décor create a beautiful atmosphere for celebrations.

**Creating Memories**

Experiences matter more than gifts. A unique celebration creates lasting memories for children and families.
    `,
  },

  {
    slug: 'team-building',
    title: 'Corporate Team Building Through Adventure',
    description:
      'Learn how outdoor activities and adventure challenges improve communication, trust, and collaboration in teams.',
    image: '/CorporateFood.jpeg',
    category: 'Corporate',
    author: 'Ikigai Farm',
    date: 'June 2026',
    content: `
**Beyond Office Walls**

Corporate teams perform better when they experience challenges together outside the workplace.

**Adventure Builds Trust**

Activities like obstacle courses, problem-solving games, and outdoor experiences strengthen teamwork and leadership.

**Communication & Collaboration**

Adventure-based learning improves communication between teams and encourages collaboration naturally.

**The Ikigai Experience**

Ikigai Farm offers corporate experiences designed to improve morale, creativity, and team bonding.
    `,
  },

  {
    slug: 'farm-to-fork',
    title: 'Farm To Fork: The Joy of Fresh Food',
    description:
      'Experience the magic of organic ingredients, fresh harvests, and wholesome meals straight from the farm.',
    image: '/Food1.jpeg',
    category: 'Food',
    author: 'Ikigai Farm',
    date: 'June 2026',
    content: `
**Fresh Ingredients Matter**

Food tastes different when it comes directly from nature.

**Organic & Local**

Farm-fresh meals support healthier lifestyles and sustainable practices.

**A Complete Experience**

Dining at Ikigai Farm is more than food — it is an atmosphere, a feeling, and a memory.

**Celebrating Simplicity**

Simple, fresh ingredients often create the most meaningful experiences.
    `,
  },

  {
    slug: 'adventure-activities',
    title: 'Top Adventure Activities at Ikigai Farm',
    description:
      'From ziplining and ATV rides to archery and obstacle courses — explore the experiences visitors love the most.',
    image: '/zipline2.jpeg',
    category: 'Adventure',
    author: 'Ikigai Farm',
    date: 'June 2026',
    content: `
**Adventure For Everyone**

Ikigai Farm combines thrill, excitement, and nature in one destination.

**Popular Activities**

Visitors love ziplining, ATV rides, rope challenges, archery, and outdoor games.

**Safe & Exciting**

Experiences are designed to be safe while still giving visitors an adrenaline-filled adventure.

**More Than Entertainment**

Adventure activities build confidence, teamwork, and unforgettable memories.
    `,
  },

  {
    slug: 'digital-detox',
    title: 'A Digital Detox in Nature',
    description:
      'Escape the noise of everyday life and reconnect with yourself through peaceful farm experiences and nature retreats.',
    image: '/BeautifulVenue1.jpeg',
    category: 'Lifestyle',
    author: 'Ikigai Farm',
    date: 'June 2026',
    content: `
**The Need To Disconnect**

Constant notifications and screen time leave people mentally exhausted.

**Finding Peace Outdoors**

Nature encourages mindfulness, calmness, and emotional balance.

**Meaningful Experiences**

Real conversations, outdoor activities, and quiet spaces create a healthier balance.

**Rediscover Yourself**

Sometimes the best reset comes from stepping away from technology and reconnecting with nature.
    `,
  },

  {
    slug: 'finding-your-ikigai',
    title: 'Finding Your Ikigai Through Nature',
    description:
      'Modern life moves fast. Discover how nature, experiences, and connection help people rediscover purpose and joy.',
    image: '/3dCarousel1.jpeg',
    category: 'Lifestyle',
    author: 'Ikigai Farm',
    date: 'June 2026',
    content: `
**What Is Ikigai?**

Ikigai is the Japanese concept of finding purpose and joy in life.

**Nature & Purpose**

Being surrounded by nature helps people slow down and reflect.

**Experiences Over Possessions**

Meaningful experiences create happiness that lasts longer than material things.

**Why Ikigai Farm Exists**

Ikigai Farm was created to help people reconnect with nature, loved ones, and themselves.
    `,
  },
]

export const getBlogBySlug = (
  slug: string
) => {
  return blogs.find(
    (blog) => blog.slug === slug
  )
}

export const getAllBlogSlugs = () => {
  return blogs.map((blog) => blog.slug)
}