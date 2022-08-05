const places = {
  attractions: [
    {
      name: "Boudhanath Stupa",
      location: "Bagmati, Kathmandu",
      cords: [27.7215, 85.362],
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/8a/Boudhanath_Stupa-IMG_7048.jpg",
      des: "Bouddhanath stupa is the most liked sightseeing place in Kathmandu. Visitors are required to pay NRs. 250(Foreign Nationals) NRs. 50 (SAARC Nationals) NRs. 250 (Chinese) per person (Below 10 years free) as entrance fees to the Bouddhanath. A lot of Tibetan people reside around the Stupa. And it is very famous and holy place specially of Buddhists People. It is one of the most popular world heritage site of Nepal. Breakfree Adventures offer Bouddhanath Private Sightseeing Day Tours.",
    },
    {
      name: "Swayambhunath Temple",
      location: "P77R+X4G, BHAGANPAU 44600",
      cords: [27.7149, 85.2903],
      image: "",
      des: "Swayambhunath is a glorious ancient religious architecture, located in the middle of Kathmandu city. It is center of faith of both Buddhist and Hindus.",
    },
    {
      name: "Pashupatinath Temple",
      location: "Gaushala Road, Kathmandu 44600",
      cords: [27.7104, 85.3487],
      image: "",
      des: "This temple was classified as a World Heritage Site in 1979. This 'extensive Hindu temple precinct' is a 'sprawling collection of temples, ashrams, images and inscriptions raised over the centuries along the banks of the sacred Bagmati river', and is one of seven monument groups in UNESCO's designation of Kathmandu Valley.",
    },
    {
      name: "Chandragiri Hills",
      location: "Chandragiri, Kathmandu",
      cords: [27.6672, 85.2058],
      image: "",
      des: "Chandragiri Hill is seven kilometres from Thankot, and lies on the south-west side of Kathmandu Valley which is 2551 metres above sea level. The hill provides panoramic views of Kathmandu Valley and the Himalayan ranges from Annapurna to Everest.",
    },
    {
      name: "Kopan Monastery",
      location: "Kopan Monastery Budhanilkantha Municipality Ward 11",
      cords: [27.7425, 85.3644],
      image: "",
      des: "Hundreds of monks and nuns live at this monastery, which offers meditation courses year round.",
    },
    {
      name: "Thamel",
      location: "Bagmati, Kathmandu 44600",
      cords: [27.7154, 85.3123],
      image: "",
      des: "A buzzing, visitor-friendly area, Thamel is the city’s main nightlife zone. Bars blast out live music by cover bands, and lively eateries serve Nepalese and international dishes. Designed in 1920, the stately Garden of Dreams is dotted with pavilions, fountains, and urns. Markets and stores sell metal handicrafts, colorful jewelry, and trekking gear, while pedestrianized Mandala Street has upmarket shops and spas.",
    },
    {
      name: "Garden of Dreams",
      location: "P877+MR2, Tridevi Sadak, Kathmandu 44600",
      cords: [27.7141, 85.3145],
      image: "",
      des: "The Garden of Dreams, a neo classical historical garden, is situated in the midst of Kathmandu city, Nepal. The Garden's design has much in common with formal European gardens: paved perimeter paths, punctuated by pavilions, trellises, and various planting areas, surrounded by a sunken flower garden with a large pond at its center. It is an architectural landscape that encourages the visitor to stroll around and discover the Garden's treasures from many different vantage points.",
    },
    {
      name: "Namo Buddha (Stupa)",
      location: "Buddha Stupa, Boudhanath Sadak",
      cords: [27.5698, 85.5824],
      image: "",
      des: "Namobudha is one of the most important religious sites of the Buddhists after Kathmandu's, Swyambhunath and Bouddhanath. It is located on a picturesque hill, 45 km along Banepa, Panauti route. The religiously important Namobuddha, surrounded by serene environment and green hills, is gaining fame as an important Buddhist pilgrimage site. The site is also gaining reputation as a tourist destination and more and more foreign tourists reach the place every year. Huge festival is organized here on the full moon day of Basisakh (May). the Birthday of Lord Buddha. Thousands of devotees both Buddhist and Hindu gather here for the festival. Tourist are also attracted to the artistic monasteries and the idol of 'Sacrifice to the Tigress' located around the hilltop famous for viewing sunrise and sunset.",
    },
    {
      name: "Kathmandu Durbar Square",
      location: "J P Marg, Kathmandu 44600",
      cords: [27.7042, 85.3067],
      image: "",
      des: "Kathmandu Durbar Square is located in front of the old royal palace of the former Kathmandu Kingdom and is one of three Durbar Squares in the Kathmandu Valley in Nepal, all of which are UNESCO World Heritage Sites. Several buildings in the Square collapsed due to a major earthquake on 25 April 2015.",
    },
    {
      name: "Shivapuri Nagarjun National Park",
      location: "Panimuhan Budanilkantha, Kathmandu, Nepal",
      cords: [27.8129, 85.3859],
      image: "",
      des: "Shivapuri Nagarjun National Park is the ninth national park in Nepal and was established in 2002. It is located in the country's mid-hills on the northern fringe of the Kathmandu Valley and named after Shivapuri Peak of 2,732 m altitude. ",
    },
    {
      name: "Kailashnath Mahadev",
      location: "Sanga, Suryabinayak 44800",
      cords: [27.6461, 85.4743],
      image: "",
      des: "Kailashnath Mahadev Statue is the tallest Shiva statue in the world. It is also the second tallest Hindu deity statue after Garuda Wisnu Kencana Statue in Bali, Indonesia. It is situated in Sanga, Kavrepalanchok District in Nepal, about 20 km from Kathmandu.",
    },
    {
      name: "Dakshinkali Temple",
      location: "J747+29X, Pharping-Kulekhani Road, Dakshinkali 44600",
      cords: [27.6051, 85.2635],
      image: "",
      des: "Dakshinkali Temple, also Dakshin Kali Temple or Dakshina Kali Temple, located 22 kilometres outside Kathmandu and about 1 kilometre outside the village of Pharping, is one of the major Hindu temples in Nepal dedicated to the goddess Kali.",
    },
    {
      name: "Budhanilkantha",
      location: "Bagmati, Kathmandu 44600",
      cords: [27.7654, 85.3653],
      image: "",
      des: "Budhanilkantha is a sprawling suburb that stretches into Shivapuri Nagarjun National Park, a forested area home to leopards, monkeys, and bears, plus many species of local and migratory birds. At Bhuijasi Narayan Temple, a black basalt carving of the Hindu god Vishnu, draped in marigolds and reclining on a bed of serpents, lies in a small pond. ISKCON Nepal temple offers spiritual sessions and classes.",
    },
    {
      name: "Hanuman Dhoka",
      location: "Hanuman Dhoka Sadak, Kathmandu 44600",
      cords: [27.70462, 85.30748],
      image: "",
      des: "Hanuman Dhoka is a complex of structures with the Royal Palace of the Malla kings and also of the Shah dynasty in the Durbar Square of central Kathmandu, Nepal. It is spread over five acres. The Hanuman Dhoka Palace gets its name from the stone image of Hanuman, the Hindu deity, that sits near the main entryway.",
    },
    {
      name: "Kumari Chowk",
      location: "Durbar Square, Kathmandu, Nepal",
      cords: [27.6419, 84.1227],
      image: "",
      des: "Also called Kumari Bahal, this fascinating palace is home to a virgin girl who is worshipped as the goddess Durga in human form. She can sometimes be glimpsed at her windows.",
    },
    {
      name: "Narayanhiti Palace Museum",
      location: "Narayanhiti Path, Kathmandu 44600",
      cords: [27.715, 85.3183],
      image: "",
      des: "The Narayanhiti Palace Museum is a public museum in Kathmandu, Nepal located east of the Kaiser Mahal and next to Thamel. The museum was created in 2008 from the complex of the former Narayanhiti Palace following the 2006 revolution.",
    },
    {
      name: "Basantapur Tower",
      location: "Bagmati, Kathmandu 44600",
      cords: [27.70895, 85.3158],
      image: "",
      des: "Kathmandu Durbar Square is located in front of the old royal palace of the former Kathmandu Kingdom and is one of three Durbar Squares in the Kathmandu Valley in Nepal, all of which are UNESCO World Heritage Sites. Several buildings in the Square collapsed due to a major earthquake on 25 April 2015.",
    },

    {
      name: "Phewa Lake",
      location: "Kaski, Pokhara",
      cords: [28.2154, 83.9453],
      image: "",
      des: "Phewa Lake, Phewa Tal or Fewa Lake is a freshwater lake in Nepal formerly called Baidam Tal located in the south of the Pokhara Valley that includes Pokhara city; parts of Sarangkot and Kaskikot.",
    },
    {
      name: "Begnas Lake",
      location: "Kaski, Nepal",
      cords: [28.1739, 84.0973],
      image: "",
      des: "Begnas Lake is a freshwater lake in Pokhara Lekhnath Metropolis of Kaski district of Nepal located in the south-east of the Pokhara Valley. The lake is the third largest lake of Nepal and second largest, after Phewa Lake, among the eight lakes in Pokhara Valley.",
    },
    {
      name: "Devi's Fall",
      location: "Sital path, Pokhara 33700",
      cords: [28.19, 83.9593],
      image: "",
      des: "Devi's Falls is a waterfall located at Pokhara in Kaski District, Nepal. The water forms a tunnel after reaching the bottom. This tunnel is approximately 500 feet long and runs 100 feet below ground level. On 31 July 1961, a Swiss couple went swimming but the woman drowned in a pit because of the overflow.",
    },
    {
      name: "Shree Bindhyabasini Temple",
      location: "Kaski, Nepal",
      cords: [28.2378, 83.9842],
      image: "",
      des: "The Bindhyabasini Temple is the oldest temple in the city of Pokhara, Nepal and is located in Ward No. 2, Miruwa. It regularly attracts a large number of locals, Nepalis from across the country and foreigners alike. The main temple is devoted to goddess Bindhyabasini, a Bhagawati who is the incarnation of Kali.",
    },
    {
      name: "Mahendra Cave",
      location: "7XCH+MR6, Pokhara 33700",
      cords: [28.271793, 83.979324],
      image: "",
      des: "Mahendra Cave is a cave located in Pokhara-16, batulechaur, Kaski district, close to the Kali khola, is a large limestone cave. It is a rare example of a cave system in Nepal containing stalagmites and stalactites. This show cave attracts thousands of tourists every year. ",
    },
    {
      name: "Tal Barahi",
      location: "6X43+XCM, Pokhara 33700",
      cords: [28.2075, 83.9535],
      image: "",
      des: "Tal Barahi temple also known as ‘Lake Temple’ or ‘Barahi Temple’ is a Hindu temple of the Durga. It is the most important religious monument in Pokhara, Nepal. This temple is located on a small island in the middle of Phewa Lake. As the temple is situated on a small island, the only way to visit it is by boat.",
    },
    {
      name: "Rupa Taal",
      location: "Pokhara, Nepal",
      cords: [28.1542, 84.1132],
      image: "",
      des: "Rupa Lake or Rupa Tal is a freshwater lake in Nepal located in the border of Pokhara Metropolitan and Rupa Rural Municipality of Kaski District. It is the third biggest lake in Pokhara valley of Nepal and at an altitude of 600 m covering area about 1.35 km² with an average water depth 3 m and maximum depth 6 m. ",
    },
    {
      name: "International Mountain Museum",
      location: "5XQM+X4P, Pokhara 33700",
      cords: [28.190065, 83.98286],
      image: "",
      des: "The International Mountain Museum is a museum located in Pokhara, Nepal.",
    },
    {
      name: "Chamero Gufa",
      location: "7X8G+X9M, Pokhara 33700",
      cords: [28.19957, 82.34208],
      image: "",
      des: "The Bat Cave is a solutional cave in the Kaski District in Pokhara, Nepal. It is known for a habitat of Horseshoe bats inside the cave, over the walls and ceiling. The cave is formed of limestone. It is a show cave and one of the most popular tourist destinations in Pokhara.",
    },
  ],
};

// yeslai milau hai lmaoo

mapboxgl.accessToken =
  "pk.eyJ1IjoieWFtYW4xMzM3IiwiYSI6ImNrd3V4cWRrejFjcnIydXFxcHNjcG9hbHMifQ.0MvUydr2xdlAEM2eVWqEkw";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v9",
  zoom: 7,
  center: [84.124, 28.3949],
});
for (let i = 0; i < places.attractions.length; i++) {
  const popup_html = `
                            <img src="${places.attractions[i].image}" alt="image of ${places.attractions[i].name}" style="height: 50px; width: 50px"> <br>
			                ${places.attractions[i].name}<br>
                            ${places.attractions[i].location}<br>
                            ${places.attractions[i].des}<br>
			                `;
  const popup = new mapboxgl.Popup({
    offset: 25,
    closeButton: false,
  }).setHTML(popup_html);

  const marker = new mapboxgl.Marker()
    .setLngLat([places.attractions[i].cords[1], places.attractions[i].cords[0]])
    .setPopup(popup)
    .addTo(map);
}

// navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
//   enableHighAccuracy: true,
// });

// function successLocation(position) {
//   console.log(position);
//   setupMap([position.coords.longitude, position.coords.latitude]);
// }

// function errorLocation() {
//   setupMap([85.3311488, 27.6955136]);
// }

// function setupMap(center) {
//   const map = new mapboxgl.Map({
//     container: "map", // container ID
//     style: "mapbox://styles/mapbox/streets-v11",
//     center: center,
//     zoom: 14,
//   });

//   const nav = new mapboxgl.NavigationControl();
//   map.addControl(nav);

//   map.addControl(
//     new MapboxDirections({
//       accessToken: mapboxgl.accessToken,
//     }),
//     "top-left"
//   );

//   // Set marker options.
//   const marker = new mapboxgl.Marker({
//     color: "red",
//     draggable: true,
//   })
//     .setLngLat(center)
//     .addTo(map);

//   const markerHeight = 50;
//   const markerRadius = 10;
//   const linearOffset = 25;
//   const popupOffsets = {
//     top: [0, 0],
//     "top-left": [0, 0],
//     "top-right": [0, 0],
//     bottom: [0, -markerHeight],
//     "bottom-left": [
//       linearOffset,
//       (markerHeight - markerRadius + linearOffset) * -1,
//     ],
//     "bottom-right": [
//       -linearOffset,
//       (markerHeight - markerRadius + linearOffset) * -1,
//     ],
//     left: [markerRadius, (markerHeight - markerRadius) * -1],
//     right: [-markerRadius, (markerHeight - markerRadius) * -1],
//   };
//   const popup = new mapboxgl.Popup({
//     offset: popupOffsets,
//     className: "my-class",
//   })
//     .setLngLat(center)
//     .setHTML("<h1>Hello World!</h1>")
//     .setMaxWidth("300px")
//     .addTo(map);
// }
