const artworks = [
    {
        id: 'boccioni01',
        image: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/485540/1005475/main-image',
        title: 'Unique Forms of Continuity in Space',
        artist: 'Umberto Boccioni',
        year: '1913',
        medium: 'Bronze',
        credit_line: 'Source: The Metropolitan Museum of Art',
        artwork_page_url: 'https://www.metmuseum.org/art/collection/search/485540',
        copyright_status: 'Public Domain',
        source: 'Umberto Boccioni, <em>Unique Forms of Continuity in Space</em>, 1913. Source: The Met'
    },
    {
        id: 'kandinsky01',
        image: 'https://www.artic.edu/iiif/2/9e00e226-9264-cda0-2893-685e0ca5b285/full/1686,/0/default.jpg',
        title: 'Improvisation No. 30 (Cannons)',
        artist: 'Vasily Kandinsky',
        year: '1913',
        medium: 'Oil on canvas',
        credit_line: 'Source: Art Institute of Chicago',
        artwork_page_url: 'https://www.artic.edu/artworks/59426/improvisation-no-30-cannons',
        copyright_status: 'Public Domain',
        source: 'Vasily Kandinsky, <em>Improvisation No. 30 (Cannons)</em>, 1930. Source: AIC'
    },
    {
        id: 'mondrian01',
        image: 'https://www.artic.edu/iiif/2/25f660ee-f1db-d13b-42a5-56df97c98ba7/full/1686,/0/default.jpg',
        title: 'Lozenge Composition with Yellow, Black, Blue, Red, and Gray',
        artist: 'Piet Mondrian',
        year: '1921',
        medium: 'Oil on canvas',
        credit_line: 'Source: Art Institute of Chicago',
        artwork_page_url: 'https://www.artic.edu/artworks/59426',
        copyright_status: 'Public Domain',
        source: 'Piet Mondrian, <em>Lozenge Composition with Yellow, Black, Blue, Red, and Gray</em>, 1921. Source: AIC'
    },
    {
        id: 'stieglitz01',
        image: 'https://www.artic.edu/iiif/2/7e30ee9a-e19c-2a0c-1ff5-7cc55a23bffd/full/1686,/0/default.jpg',
        title: 'Georgia O\'Keeffe',
        artist: 'Alfred Stieglitz',
        year: '1918',
        medium: 'Gelatin silver print',
        credit_line: 'Source: Art Institute of Chicago',
        artwork_page_url: 'https://www.artic.edu/artworks/151424',
        copyright_status: 'Public Domain',
        source: 'Alfred Stieglitz, <em>Georgia O\'Keeffe</em>, 1918. Source: AIC'
    },
    {
        id: 'vangogh01',
        image: 'https://images.metmuseum.org/CRDImages/ep/original/DT1567.jpg',
        title: 'Self-Portrait with a Straw Hat',
        artist: 'Vincent van Gogh',
        year: '1887',
        medium: 'Oil on canvas',
        credit_line: 'Source: The Metropolitan Museum of Art',
        artwork_page_url: 'https://www.metmuseum.org/art/collection/search/436532',
        copyright_status: 'Public Domain',
        source: 'Vincent van Gogh, <em>Self-Portrait with a Straw Hat</em>, 1887. Source: The Met'
    },
    {
        id: 'guglielmi01',
        image: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/488126/2247128/main-image',
        title: '“One Third of a Nation”',
        artist: 'O. Louis Guglielmi',
        year: '1939',
        medium: 'Oil on canvas',
        credit_line: 'Source: The Metropolitan Museum of Art',
        artwork_page_url: 'https://www.metmuseum.org/art/collection/search/488126',
        copyright_status: 'Public Domain',
        source: 'O. Louis Guglielmi, <em>"One Third of a Nation"</em>, 1939. Source: The Met'
    },
    {
        id: 'cassatt01',
        image: 'https://www.artic.edu/iiif/2/5de963b1-55e2-b349-6cd5-85f9bd2687ec/full/1686,/0/default.jpg',
        title: 'The Child\'s Bath',
        artist: 'Mary Cassatt',
        year: '1893',
        medium: 'Oil on canvas',
        credit_line: 'Source: Art Institute of Chicago',
        artwork_page_url: 'https://www.artic.edu/artworks/28067/the-childs-bath',
        copyright_status: 'Public Domain',
        source: 'Mary Cassatt, <em>The Child\'s Bath</em>, 1893. Source: AIC'
    },
    {
        id: 'hopper01',
        image: 'https://www.artic.edu/iiif/2/831a05de-d3f6-f4fa-a460-23008dd58dda/full/843,/0/default.jpg',
        title: 'Nighthawks',
        artist: 'Edward Hopper',
        year: '1942',
        medium: 'Oil on canvas',
        credit_line: 'Source: Art Institute of Chicago',
        artwork_page_url: 'https://www.artic.edu/artworks/79386/nighthawks',
        copyright_status: 'Public Domain',
        source: 'Edward Hopper, <em>Nighthawks</em>, 1942. Source: AIC'
    },
    {
        id: 'Matjeko01',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Jan_Matejko%2C_Sta%C5%84czyk.jpg/1600px-Jan_Matejko%2C_Sta%C5%84czyk.jpg?20230117094610',
        title: 'Stańczyk',
        artist: 'Jan Matejko',
        year: '1862',
        medium: 'Oil on canvas',
        credit_line: 'Source: Wikimedia Commons',
        artwork_page_url: 'https://commons.wikimedia.org/wiki/File:Jan_Matejko%2C_Sta%C5%84czyk.jpg',
        copyright_status: 'Public Domain',
        source: 'Jan Matejko, <em>Stańczyk</em>, 1862. Source: Wikimedia Commons'
    },
    {
        id: 'Caravaggio01',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Caravaggio_-_Judith_and_Holophernes_Toulouse_-_High_Definition.jpg/1444px-Caravaggio_-_Judith_and_Holophernes_Toulouse_-_High_Definition.jpg?20190919173050',
        title: 'Judith Beheading Holofernes',
        artist: 'Caravaggio',
        year: '1598-1599',
        medium: 'Oil on canvas',
        credit_line: 'Source: Wikimedia Commons',
        artwork_page_url: 'https://commons.wikimedia.org/wiki/File:Judith_Beheading_Holofernes_-_Caravaggio.jpg',
        copyright_status: 'Public Domain',
        source: 'Caravaggio, <em>Judith Beheading Holofernes</em>, 1598-1599. Source: Wikimedia Commons'
        // #10
    },
    {
        id: 'duchamp-stieglitz01',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Marcel_Duchamp%2C_1917%2C_Fountain%2C_photograph_by_Alfred_Stieglitz.jpg/960px-Marcel_Duchamp%2C_1917%2C_Fountain%2C_photograph_by_Alfred_Stieglitz.jpg?20201116141617',
        title: 'Fountain',
        artist: 'Marcel Duchamp',
        year: '1917',
        medium: 'Porcelain urinal',
        credit_line: 'Source: The Museum of Modern Art, New York',
        artwork_page_url: 'https://www.moma.org/collection/works/81229',
        copyright_status: 'Public Domain',
        source: 'Marcel Duchamp, <em>Fountain</em>, 1917, photograph by Alfred Stieglitz at the 291 (Art Gallery) following the 1917 Society of Independent Artists exhibit, with entry tag visible. The backdrop is The Warriors by Marsden Hartley. Source: Wikimedia Commons'
    },
    {
        id: 'brown-jr01',
        image: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/488109/1008590/main-image',
        title: 'Self-Portrait',
        artist: 'Samuel Joseph Brown, Jr.',
        year: 'ca. 1941',
        medium: 'Oil on canvas',
        credit_line: 'Source: The Metropolitan Museum of Art',
        artwork_page_url: 'https://www.metmuseum.org/art/collection/search/488109',
        copyright_status: 'Public Domain',
        source: 'Samuel Joseph Brown, Jr., <em>Self-Portrait</em>, ca. 1941. Source: The Met'
    },
    {
        id: 'vase01',
        image: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/51160/66837/main-image',
        title: 'Double Vase',
        artist: 'Unknown',
        year: 'Qing dynasty (1644–1911), Qianlong mark and period (1736–95)',
        medium: 'Porcelain',
        credit_line: 'Source: The Metropolitan Museum of Art',
        artwork_page_url: 'https://www.metmuseum.org/art/collection/search/51160',
        copyright_status: 'Public Domain',
        source: 'Unknown, <em>Double Vase</em>, Qing dynasty (1644–1911), Qianlong mark and period (1736–95). Source: The Met'
    },
    {
        id: 'miniature01',
        image: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/435801/791322/main-image',
        title: 'Eye Miniature',
        artist: 'British Painter',
        year: 'early 19th century',
        medium: 'Ivory',
        credit_line: 'Source: The Metropolitan Museum of Art',
        artwork_page_url: 'https://www.metmuseum.org/art/collection/search/435801',
        copyright_status: 'Public Domain',
        source: 'British Painter, <em>Eye Miniature</em>, early 19th century. Source: The Met'
    },
    {
        id: 'carriere01',
        image: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/435856/1728755/main-image',
        title: 'Self Portrait',
        artist: 'Eugène Carrière',
        year: 'ca. 1893',
        medium: 'Oil on canvas',
        credit_line: 'Source: The Metropolitan Museum of Art',
        artwork_page_url: 'https://www.metmuseum.org/art/collection/search/435856',
        copyright_status: 'Public Domain',
        source: 'Eugène Carrière, <em>Self Portrait</em>, ca. 1893. Source: The Met'
    },
    {
        id: 'chase01',
        image: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/10467/37022/main-image',
        title: 'Fish',
        artist: 'William Merritt Chase',
        year: 'by 1980',
        medium: 'Oil on canvas',
        credit_line: 'Source: The Metropolitan Museum of Art',
        artwork_page_url: 'https://www.metmuseum.org/art/collection/search/10467',
        copyright_status: 'Public Domain',
        source: 'William Merritt Chase, <em>Fish</em>, by 1980. Source: The Met'
    },
    {
        id: 'delacroix01',
        image: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/459094/913488/main-image',
        title: 'Valley with Fir (Shade on the Mountain)',
        artist: 'Henri-Edmond Cross (Henri-Edmond Delacroix)',
        year: '1909',
        medium: 'Oil on canvas',
        credit_line: 'Source: The Metropolitan Museum of Art',
        artwork_page_url: 'https://www.metmuseum.org/art/collection/search/459094',
        copyright_status: 'Public Domain',
        source: 'Henri-Edmond Cross (Henri-Edmond Delacroix), <em>Valley with Fir (Shade on the Mountain)</em>, 1909. Source: The Met'
    },
    {
        id: 'mvnch01',
        image: 'https://www.artic.edu/iiif/2/d7df2633-3b40-f570-c906-211503a37cde/full/1686,/0/default.jpg',
        title: 'The Girl by the Window',
        artist: 'Edvard Munch',
        year: '1893',
        medium: 'Oil on canvas',
        credit_line: 'Source: Art Institute of Chicago',
        artwork_page_url: 'https://www.artic.edu/artworks/28067/the-girl-by-the-window',
        copyright_status: 'Public Domain',
        source: 'Edvard Munch, <em>The Girl by the Window</em>, 1893. Source: AIC'
    },
    {
        id: 'sargent01',
        image: 'https://www.artic.edu/iiif/2/3f9aa9db-61e1-7060-fdb0-bfd7e41ddd08/full/1686,/0/default.jpg',
        title: 'The Fountain, Villa Torlonia, Frascati, Italy',
        artist: 'John Singer Sargent',
        year: '1907',
        medium: 'Oil on canvas',
        credit_line: 'Source: Art Institute of Chicago',
        artwork_page_url: 'https://www.artic.edu/artworks/59426',
        copyright_status: 'Public Domain',
        source: 'John Singer Sargent, <em>The Fountain, Villa Torlonia, Frascati, Italy</em>, 1907. Source: AIC'
    },
    {
        id: 'goya01',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Francisco_de_Goya_y_Lucientes_-_Witches%27_Sabbath_%28The_Great_He-Goat%29.jpg/1599px-Francisco_de_Goya_y_Lucientes_-_Witches%27_Sabbath_%28The_Great_He-Goat%29.jpg?20120309052210',
        title: 'Witches\' Sabbath',
        artist: 'Francisco Goya',
        year: 'circa 1821-1823',
        medium: 'Oil on canvas',
        credit_line: 'Source: Wikimedia Commons',
        artwork_page_url: 'https://commons.wikimedia.org/wiki/File:Francisco_de_Goya_y_Lucientes_-_Witches%27_Sabbath_%28The_Great_He-Goat%29.jpg',
        copyright_status: 'Public Domain',
        source: 'Francisco Goya, <em>Witches\' Sabbath</em>, circa 1821-1823. Source: Wikimedia Commons'
        // #20
    },
    {
        id: 'goya02',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Goya_Dog.jpg/800px-Goya_Dog.jpg',
        title: 'The Dog',
        artist: 'Claude Monet',
        year: 'between 1820 to 1823',
        medium: 'Oil on canvas',
        credit_line: 'Source: Wikimedia Commons',
        artwork_page_url: 'https://commons.wikimedia.org/wiki/File:Claude_Monet_-_The_Dog.jpg',
        copyright_status: 'Public Domain',
        source: 'Claude Monet, <em>The Dog</em>, between 1820 to 1823. Source: Wikimedia Commons'
    },
    {
        id: 'bosch01',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Hieronymus_Bosch_013_%28cropped%29.jpg/1074px-Hieronymus_Bosch_013_%28cropped%29.jpg?20230802231337',
        title: 'Visions of the Hereafter: Ascent of the Blessed',
        artist: 'Hieronymus Bosch',
        year: 'between circa 1500 and circa 1504',
        medium: 'Oil on panel',
        credit_line: 'Source: Wikimedia Commons',
        artwork_page_url: 'https://commons.wikimedia.org/wiki/File:Hieronymus_Bosch_013_%28cropped%29.jpg',
        copyright_status: 'Public Domain',
        source: 'Hieronymus Bosch, Close-up of <em>Visions of the Hereafter: Ascent of the Blessed</em>, between circa 1500 and circa 1504. Source: Wikimedia Commons'
    },
    {
        id: 'arp01',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Zonder_titel_PK-F-EAA.6755.jpg',
        title: 'Unknown Title',
        artist: 'Hans Arp',
        year: 'between 1943 and 1953',
        medium: 'Wood, metal, and string',
        credit_line: 'Source: Wikimedia Commons',
        artwork_page_url: 'https://commons.wikimedia.org/wiki/File:Zonder_titel_PK-F-EAA.6755.jpg',
        copyright_status: 'Public Domain',
        source: 'Hans Arp, <em>Unknown Title</em>, between 1943 and 1953. Source: Wikimedia Commons'
    },
    {
        id: 'russolo01',
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/La_musica%2C_Luigi_Russolo.jpg?20170320121749',
        title: 'La Musica',
        artist: 'Luigi Russolo',
        year: 'between 1911 and 1912',
        medium: 'Oil on canvas',
        credit_line: 'Source: Wikimedia Commons',
        artwork_page_url: 'https://commons.wikimedia.org/wiki/File:La_musica%2C_Luigi_Russolo.jpg',
        copyright_status: 'Public Domain',
        source: 'Luigi Russolo, <em>La Musica</em>, between 1911 and 1912. Source: Wikimedia Commons'
    },
    {
        id: 'ratsch01',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/F%C3%BCr_M.N._F%C3%BCr_sich_allein.jpg/960px-F%C3%BCr_M.N._F%C3%BCr_sich_allein.jpg?20140310182738',
        title: 'Headstone, terrakotta',
        artist: 'Dorothee Rätsch',
        year: '2010',
        medium: 'Terracotta',
        credit_line: 'Source: Wikimedia Commons',
        artwork_page_url: 'https://commons.wikimedia.org/wiki/File:F%C3%BCr_M.N._F%C3%BCr_sich_allein.jpg',
        copyright_status: 'CC BY-SA 3.0 DE',
        source: 'Dorothee Rätsch, <em>Headstone, terrakotta</em>, 2010. Source: Wikimedia Commons'
    },
    {
        id: 'eisenman01',
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Nicole_Eisenman%2C_Foghorn_Hits_the_Road%2C_2007%2C_Oil_on_canvas%2C_14%22_x_10_%C2%BE%22.jpg?20161025025115',
        title: 'Foghorn Hits the Road',
        artist: 'Nicole Eisenman',
        year: '2007',
        medium: 'Oil on canvas',
        credit_line: 'Source: Wikimedia Commons',
        artwork_page_url: 'https://commons.wikimedia.org/wiki/File:Nicole_Eisenman%2C_Foghorn_Hits_the_Road%2C_2007%2C_Oil_on_canvas%2C_14%22_x_10_%C2%BE%22.jpg',
        copyright_status: 'CC BY-SA 4.0',
        source: 'Nicole Eisenman, <em>Foghorn Hits the Road</em>, 2007. Source: Wikimedia Commons'
    },
    {
        id: 'malevich01',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/White_on_White_%28Malevich%2C_1918%29.png/1200px-White_on_White_%28Malevich%2C_1918%29.png?20231219235508',
        title: 'White on White',
        artist: 'Kazimir Malevich',
        year: '1918',
        medium: 'Oil on canvas',
        credit_line: 'Source: Wikimedia Commons',
        artwork_page_url: 'https://commons.wikimedia.org/wiki/File:White_on_White_%28Malevich%2C_1918%29.png',
        copyright_status: 'Public Domain',
        source: 'Kazimir Malevich, <em>White on White</em>, 1918. Source: Wikimedia Commons'
    },
    {
        id: 'malevich02',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Suprematist_Composition_-_Kazimir_Malevich.jpg/1280px-Suprematist_Composition_-_Kazimir_Malevich.jpg?20120921160237',
        title: 'Suprematist Composition',
        artist: 'Kazimir Malevich',
        year: '1915',
        medium: 'Oil on canvas',
        credit_line: 'Source: Wikimedia Commons',
        artwork_page_url: 'https://commons.wikimedia.org/wiki/File:Suprematist_Composition_-_Kazimir_Malevich.jpg',
        copyright_status: 'Public Domain',
        source: 'Kazimir Malevich, <em>Suprematist Composition</em>, 1915. Source: Wikimedia Commons'
    },
    {
        id: 'hofheinz-doring01',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Geizhals%2C_Margret_Hofheinz-D%C3%B6ring%2C_Mischtechnik%2C_1926_%28WV-Nr.5579%29.JPG?20080630100609',
        title: 'The Miser (Geizhals)',
        artist: 'Margret Hofheinz-Döring',
        year: '1926',
        medium: 'Mixed media (Mischtechnik)',
        credit_line: 'Source: Wikimedia Commons',
        artwork_page_url: 'https://commons.wikimedia.org/wiki/File:Geizhals,_Margret_Hofheinz-D%C3%B6ring,_Mischtechnik,_1926_(WV-Nr.5579).JPG',
        copyright_status: 'CC BY-SA 3.0 DE',
        source: 'Margret Hofheinz-Döring, <em>The Miser</em>, 1926. Source: Wikimedia Commons'
    }
];

const quotes = [
    {
        id: 'stein01',
        text: 'There is no there there.',
        source: 'Gertrude Stein, <em>Everybody\'s Autobiography</em>, 1937.'
    },
    {
        id: 'hd01',
        text: 'Are you alive? / I touch you. / You quiver like a sea-fish. / I cover you with my net. / What are you--banded one?',
        source: 'H.D. (Hilda Doolittle), “The Pool,” 1914.'
    },
    {
        id: 'seuss01',
        text: 'Should we tell her about it? / Now what SHOULD we do? / Well... / what would YOU do / If your mother asked YOU?',
        source: 'Dr. Seuss, <em>The Cat in the Hat</em>, 1957.'
    },
    {
        id: 'berger01',
        text: 'We never just look at one thing; we are always looking at the relation between things and ourselves.',
        source: 'John Berger, <em>Ways of Seeing</em>, 1972.'
    },
    {
        id: 'carson01',
        text: 'It was red, he said. Not the color of tomatoes or Windex but the color of pomegranates. He had a lot to learn about the world.',
        source: 'Anne Carson, <em>Autobiography of Red</em>, 1998.'
    },
    {
        id: 'sartre01',
        text: 'What summits would I not reach if <em>my own life</em> made the subject of melody?',
        source: 'Jean-Paul Sartre, <em>Nausea</em>, translated by Lloyd Alexander, 1938.'
    },
    {
        id: 'woolf01',
        text: 'A woman must have money and a room of her own if she is to write fiction.',
        source: 'Virginia Woolf, <em>A Room of One\'s Own</em>, 1929.'
    },
    {
        id: 'wittgenstein01',
        text: 'Whereof one cannot speak, thereof one must be silent.',
        source: 'Ludwig Wittgenstein, <em>Tractatus Logico-Philosophicus</em>, 1921.'
    },
    {
        id: 'borges01',
        text: 'I have always imagined that Paradise will be a kind of library.',
        source: 'Jorge Luis Borges, “Poema of the Gifts,” 1962.'
    },
    {
        id: 'eliot01',
        text: 'I will show you fear in a handful of dust.',
        source: 'T.S. Eliot, <em>The Waste Land</em>, 1922.'
        // #10
    },
    {
        id: 'pound01',
        text: 'The apparition of these faces in the crowd; / Petals on a wet, black bough.',
        source: 'Ezra Pound, “In a Station of the Metro,” 1913.'
    },
    {
        id: 'williams01',
        text: 'It is difficult to get the news from poems yet men die miserably every day for lack of what is found there.',
        source: 'William Carlos Williams, "Asphodel, That Greeny Flower", 1955.'
    },
    {
        id: 'nelson01',
        text: 'Is it possible, I wonder, to be in love with a thing, or with a color?',
        source: 'Maggie Nelson, <em>Bluets</em>, 2009.'
    },
    {
        id: 'davis01',
        text: 'She knows he has a new friend. She is not supposed to know.',
        source: 'Lydia Davis, “New Friend,” 2007.'
    },
    {
        id: 'loy01',
        text: 'The primary instrument of the magnetic Rhapsody.',
        source: 'Mina Loy, “Love Songs,” 1915.'
    },
    {
        id: 'derrida01',
        text: 'There is nothing outside of the text.',
        source: 'Jacques Derrida, <em>Of Grammatology</em>, 1967.'
    },
    {
        id: 'woolf02',
        text: 'The day waves yellow with all its crops. <em>It is a harvest day</em>. Wind blows the cartwheels along the road.',
        source: 'Virginia Woolf, <em>The Waves</em>, 1931.'
    },
    {
        id: 'carson02',
        text: 'The difference between a good life and a bad life is how well you walk through fire.',
        source: 'Anne Carson, paraphrasing a Heraclitus fragment, in <em>Grief Lessons</em>, 2006.'
    },
    {
        id: 'walser01',
        text: 'So many fine things go to ruin simply because nobody believes in them.',
        source: 'Robert Walser, <em>Microscripts</em>, translated by Susan Bernofsky, 2010.'
    },
    {
        id: 'kafka01',
        text: 'You do not need to leave your room. Remain sitting at your table and listen. You do not even need to listen, simply wait.',
        source: 'Franz Kafka, fragment from <em>Reflections on Sin, Suffering, Hope, and the True Way</em>, c.1920.'
        // #20
    },
    {
        id: 'bernard01',
        text: 'Each sentence is a house with all its rooms open to the wind.',
        source: 'Thomas Bernhard, quoted in interviews, paraphrased in <em>Concrete</em>, 1982.'
    },
    {
        id: 'lispector01',
        text: 'The world began with a yes. One molecule said yes to another molecule and life was born.',
        source: 'Clarice Lispector, <em>The Hour of the Star</em>, 1977.'
    },
    {
        id: 'chekhov01',
        text: 'Do you see that tree? Look at it—it is dead at the top, but it still sways in the wind.',
        source: 'Anton Chekhov, <em>The Cherry Orchard</em>, 1904.'
    },
    {
        id: 'arendt01',
        text: 'The ideal subject of totalitarian rule is not the convinced Nazi or the dedicated Communist, but people for whom the distinction between fact and fiction no longer exists.',
        source: 'Hannah Arendt, <em>The Origins of Totalitarianism</em>, 1951.'
    },
    {
        id: 'ferrante01',
        text: 'The truth is difficult and always broken. <em>It is made of jagged edges</em>.',
        source: 'Elena Ferrante, <em>Frantumaglia</em>, 2003.'
    },
    {
        id: 'sebald01',
        text: 'It was a day of high, white cirrus clouds stretched like shreds of combed-out wool across the sky.',
        source: 'W.G. Sebald, <em>The Rings of Saturn</em>, 1995.'
    },
    {
        id: 'ishiguro01',
        text: 'What I wish to impart to you is memory, an echo that persists.',
        source: 'Kazuo Ishiguro, <em>Never Let Me Go</em>, 2005.'
    },
    {
        id: 'woolf03',
        text: 'She stood at the drawing-room window holding the blind cord. The sky seemed to her a vast blue lake.',
        source: 'Virginia Woolf, <em>To the Lighthouse</em>, 1927.'
    },
    {
        id: 'lennon01',
        text: 'Limitless undying love which shines around me like a million suns...',
        source: 'John Lennon, “Across the Universe,” 1969.'
    },
    {
        id: 'lewis01',
        text: 'He stood in the woods, listening to the click of branches, like bones remembering how to hold themselves.',
        source: 'Sinéad Gleeson (attrib. via essay citation, 2019).'
        // #30
    },
    {
        id: 'markstrand01',
        text: 'I empty myself of the names of others. I empty my pockets. I empty my shoes and leave them beside the road.',
        source: 'Mark Strand, <em>Keeping Things Whole</em>, 1969.'
    },
    {
        id: 'carver01',
        text: 'He felt his heart beating in the silence, as if it were a small animal trying to escape.',
        source: 'Raymond Carver, <em>Cathedral</em>, 1983.'
    },
    {
        id: 'paz01',
        text: 'Night flows through me like a river. I am alone and full of echoes.',
        source: 'Octavio Paz, <em>Piedra de sol</em>, 1957.'
    },
    {
        id: 'lispector02',
        text: 'The world isn’t what you think it is. You can’t wrap it in paper and tie it up with a bow.',
        source: 'Clarice Lispector, <em>The Stream of Life</em>, 1973.'
    },
    {
        id: 'capote01',
        text: 'The wind is us—it gathers and remembers all our voices, then sends them talking and tossing among the trees.',
        source: 'Truman Capote, <em>The Grass Harp</em>, 1951.'
    },
    {
        id: 'bolano01',
        text: 'There’s a light that never goes out, said the girl. Like in a song.',
        source: 'Roberto Bolaño, <em>2666</em>, 2004.'
    },
    {
        id: 'butler01',
        text: 'Gender is always a doing, though not a doing by a subject who might be said to preexist the deed.',
        source: 'Judith Butler, <em>Gender Trouble</em>, 1990.'
    },
    {
        id: 'murdoch01',
        text: 'Beauty is the only spiritual thing which we love by instinct.',
        source: 'Iris Murdoch, <em>The Sovereignty of Good</em>, 1970.'
    },
    {
        id: 'plato01',
        text: 'What is seen is the shadow of what is real.',
        source: 'Plato, <em>The Republic</em>, c. 375 BCE.'
    },
    {
        id: 'wittgenstein02',
        text: 'Don’t think, look!',
        source: 'Ludwig Wittgenstein, <em>Philosophical Investigations</em>, §66, 1953.'
        // #40
    },
    {
        id: 'berkley01',
        text: 'To be is to be perceived.',
        source: 'George Berkeley, <em>A Treatise Concerning the Principles of Human Knowledge</em>, 1710.'
    },
    {
        id: 'hume01',
        text: 'Beauty in things exists merely in the mind which contemplates them.',
        source: 'David Hume, <em>Of the Standard of Taste</em>, 1757.'
    },
    {
        id: 'russell01',
        text: 'Every philosophical problem, when it is subjected to the necessary analysis and purification, is found to be not really philosophical at all.',
        source: 'Bertrand Russell, <em>The Problems of Philosophy</em>, 1912.'
    },
    {
        id: 'barthes01',
        text: 'What the photograph reproduces to infinity has occurred only once.',
        source: 'Roland Barthes, <em>Camera Lucida</em>, 1980.'
    },
    {
        id: 'benjamin01',
        text: 'The work of art in the age of mechanical reproduction is detached from tradition.',
        source: 'Walter Benjamin, <em>The Work of Art in the Age of Mechanical Reproduction</em>, 1935.'
    },
    {
        id: 'bergson01',
        text: 'The eye sees only what the mind is prepared to comprehend.',
        source: 'Henri Bergson, paraphrased from <em>Matter and Memory</em>, 1896.'
    },
    {
        id: 'sontag02',
        text: 'Interpretation is the revenge of the intellect upon art.',
        source: 'Susan Sontag, <em>Against Interpretation</em>, 1964.'
    },
    {
        id: 'deleuze01',
        text: 'A concept is a brick. It can be used to build a courthouse of reason. Or it can be thrown through the window.',
        source: 'Gilles Deleuze, <em>What Is Philosophy?</em>, 1991.'
    },
    {
        id: 'borges02',
        text: 'Time is a river which sweeps me along, but I am the river.',
        source: 'Jorge Luis Borges, “A New Refutation of Time,” 1946.'
    },
    {
        id: 'berger02',
        text: 'The relation between what we see and what we know is never settled.',
        source: 'John Berger, <em>Ways of Seeing</em>, 1972.'
        // #50
    },
    {
        id: 'lacan01',
        text: 'The mirror stage is a drama whose internal thrust is precipitated from insufficiency to anticipation.',
        source: 'Jacques Lacan, “The Mirror Stage,” 1949.'
    }
];
