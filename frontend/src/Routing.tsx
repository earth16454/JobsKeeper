import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import JobApplicationManager from './pages/jobApplicationManager';
import Subnav1 from './pages/subnav1';
import Subnav2 from './pages/subnav2';
import JKAppContainer from './component/global/jk-app-container/JKAppContainer';

const Routing: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/home',
      element: <JobApplicationManager />,
      children: [
        {
          path: "test",
          element: <div>TEST 111 Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis minus eveniet, odit quos doloribus omnis ad quisquam cum odio magnam ab tempore, molestiae quam? Eligendi laboriosam iste ab, doloribus aliquid voluptatibus odit assumenda nisi. Voluptatum voluptatem non, delectus cupiditate incidunt minima est iure dicta voluptates ea repudiandae quas quidem earum enim corrupti ratione molestias modi harum dignissimos nihil quam? Ullam enim possimus culpa debitis quibusdam quis quasi minima asperiores corporis eos autem consequatur earum, dignissimos id dolor minus facilis saepe quae et numquam dolorem voluptate cum exercitationem sapiente? Ducimus vitae totam necessitatibus esse doloribus obcaecati voluptates. Nulla obcaecati animi molestias maiores mollitia consequatur, placeat, in quo aliquam amet, ipsum aut fugiat ipsa. Veniam, at ipsa autem eius incidunt, reprehenderit quasi, ducimus architecto aliquid reiciendis sint iusto ad voluptas dolor iure accusamus aperiam. Blanditiis ducimus adipisci deleniti nobis, laudantium cum at perferendis omnis debitis asperiores commodi ullam dolore rem ipsa, nemo aut illo officiis dolorem quis nam? Rerum magnam quia voluptatum. Ea dignissimos molestias magnam repellendus at eligendi harum tempora, non in saepe eum quod. Pariatur minus, animi accusantium culpa beatae a. Dolor magnam, iusto possimus dignissimos dolorum voluptas perferendis reiciendis, veniam consequuntur maxime quo! Voluptas eum rem laudantium aspernatur ratione soluta quae assumenda. Harum ex sed nostrum optio eius ipsa incidunt odio, inventore esse labore mollitia aspernatur consequatur id quasi voluptate provident impedit, ipsam exercitationem, sapiente quas modi amet nisi sunt nulla. Cum dolores rerum, at porro adipisci blanditiis esse corrupti. Adipisci vitae perferendis quaerat, cumque est atque ipsum, tenetur voluptatum qui corporis laborum esse. Minima sapiente deleniti ducimus doloribus eveniet, ad modi culpa est dolores similique, sit iste voluptatum quam. Eius sit dolore alias ut necessitatibus doloribus beatae, rem harum. Nisi, possimus enim minima ex doloremque quis quod odio sapiente ratione vel? Provident molestias quo ipsum quia maxime fuga.</div>
        }
      ]
    },
    {
      path: 'subnav1',
      element: <Subnav1 />,
    },
    {
      path: 'subnav2',
      element: <Subnav2 />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default Routing;
