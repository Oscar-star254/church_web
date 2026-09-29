import { createBrowserRouter } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import WhatToExpect from './pages/WhatToExpect';
import Events from './pages/Events';
import RSVP from './pages/RSVP';
import Leaders from './pages/Leaders';
import SmallGroups from './pages/SmallGroups';
import Sermons from './pages/Sermons';
import Blog from './pages/Blog';
import Gallery from './pages/Gallery';
import Testimonies from './pages/Testimonies';
import Prayer from './pages/Prayer';
import Volunteer from './pages/Volunteer';
import Resources from './pages/Resources';
import Parents from './pages/Parents';
import Giving from './pages/Giving';
import Contact from './pages/Contact';
import Members from './pages/Members';
import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'what-to-expect', Component: WhatToExpect },
      { path: 'events', Component: Events },
      { path: 'rsvp', Component: RSVP },
      { path: 'leaders', Component: Leaders },
      { path: 'small-groups', Component: SmallGroups },
      { path: 'sermons', Component: Sermons },
      { path: 'blog', Component: Blog },
      { path: 'gallery', Component: Gallery },
      { path: 'testimonies', Component: Testimonies },
      { path: 'prayer', Component: Prayer },
      { path: 'volunteer', Component: Volunteer },
      { path: 'resources', Component: Resources },
      { path: 'parents', Component: Parents },
      { path: 'giving', Component: Giving },
      { path: 'contact', Component: Contact },
      { path: 'members', Component: Members },
      { path: '*', Component: NotFound },
    ],
  },
]);
