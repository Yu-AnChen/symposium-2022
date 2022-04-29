import { Placeholder } from "@angular/compiler/src/i18n/i18n_ast";

const tsv_str = `	Name	NameCh	Affiliations	ImgFileName	Description	happyHour	Links
Keynote	Robert Langer		Professor, MIT	Bob_Langer.jpeg	<p>Robert Langer is one of 12 Institute Professors at the Massachusetts Institute of Technology (MIT); being an Institute Professor is the highest honor that can be awarded to a faculty member. He has written over 1,500 articles, which have been cited over 363,000 times; his h-index of 299 is the highest of any engineer in history and the 3rd highest of any individual in any field. His patents have licensed or sublicensed to over 400 companies; he is a cofounder of a number of companies including Moderna. Dr Langer served as Chairman of the FDA’s Science Board (its highest advisory board) from 1999-2002. His over 220 awards include both the United States National Medal of Science and the United States National Medal of Technology and Innovation (he is one of 3 living individuals to have received both these honors), the Charles Stark Draper Prize (often called the Engineering Nobel Prize), Queen Elizabeth Prize for Engineering, Albany Medical Center Prize, Breakthrough Prize in Life Sciences, Kyoto Prize, Wolf Prize for Chemistry, Millennium Technology Prize, Priestley Medal (highest award of the American Chemical Society), Gairdner Prize, Hoover Medal, Dreyfus Prize in Chemical Sciences, and the BBVA Frontiers of Knowledge Award in Biomedicine. He holds 36 honorary doctorates and has been elected to the National Academy of Medicine, the National Academy of Engineering, the National Academy of Sciences and the National Academy of Inventors.</p>	Yes/No	https://langerlab.mit.edu/
Keynote	Jo Viney		CEO, Seismic Therapeutic	Jo_Viney.jpeg		Yes/No	
Special	Timothy Yu		Associate Professor, Harvard Medical School	Timothy_Yu.jpeg	<p>Dr. Yu is a neurogeneticist at Boston Children’s Hospital and Harvard Medical School. He obtained his undergraduate degree in Biochemistry at Harvard College, which inspired an early preoccupation with structural biology and rational drug design. Those interests shifted during his MD-PhD training at UCSF in which he focused on neuroscience and C. elegans genetics. After completing neurology residency at Massachusetts General Hospital and Brigham and Women’s Hospital, he joined the faculty at Boston Children’s Hospital, where he has found his work to have come full circle, combining human genetics, neuroscience, and molecular medicine.</p>	Yes/No	https://www.childrenshospital.org/directory/timothy-yu
Trending						Yes/No	
Academic	Chia-Wei Cheng	鄭佳瑋	Assistant Professor, Columbia University	Chia-Wei_Cheng.jpeg		Yes/No	https://www.stemcell.columbia.edu/profile/chia-wei-cheng-phd
Academic	Erica Cai	 蔡佩珊	Assistant Investigator, Indiana Biosciences Research Institute	Erica_Cai.jpg		Yes/No	https://www.indianabiosciences.org/cai-lab
Academic	Chih-Chun Lin	林志駿	Assistant Professor, Columbia University	Chih-Chun_Lin.jpeg	<p>Chih-Chun Lin (also goes by Charles) received his medical degree from the National Taiwan University. He subsequently pursued a PhD in Neuroscience at Johns Hopkins, focused on single-cell electrophysiology and neuronal function. Charles then finished his neurology residency at the Houston Methodist Hospital before joining the Movement Disorders Fellowship program at Columbia University, where he was promoted as an assistant professor.</p>	Yes/No	https://www.neurology.columbia.edu/profile/chih-chun-lin-md
Academic	Morgan Sheng	沈華智	Professor, Broad Institute/MIT	Morgan.jpeg	<p>Morgan Sheng is a core institute member of the Broad Institute of MIT and Harvard, where he serves as co-director of the Broad’s Stanley Center for Psychiatric Research. He is also a professor of neuroscience in MIT’s Department of Brain and Cognitive Sciences, and an affiliate of both the McGovern Institute for Brain Research and the Picower Institute for Learning and Memory.</p>	Yes/No	https://www.broadinstitute.org/bios/morgan-sheng
Startup	Robert Schultz		Founder, Massnex	Robert_Schultz.jpeg	<p>Robert Schultz is a life science entrepreneur, professor, and patient advocate from Boston. As the Founder and Managing Director of Massnex, he utilizes science diplomacy to engage biotech ecosystems and align the incentives of academia, industry, government, and philanthropy to advance patient advocacy. He works with the world's leading biopharmaceutical ecosystems to help companies understand the best practices for success in the Boston ecosystem.</p>	Yes/No	
workshop1	Jason Lin		Senior Application Scientist and Market Development at LUMICKS	Jason_Lin.jpeg	<p>Jason’s long-standing interest is to connect newly developed biotechnologies to the real world and facilitate the adoption process to improve human health. Jason received his Ph.D. in Biophysics at Johns Hopkins University, where he built advanced microscopes and engineered light-sensitive enzymes as tools to study protein−nucleic acid interactions. During his Ph.D. training, Jason did an internship where he helped philanthropists facilitate the studies and the development of translational medicine in rare diseases by engaging private funding opportunities with researchers and physicians. Inspired by how scientific discoveries can be accelerated through business means, he joined LUMICKS in 2020. Jason currently works as a Senior Application Scientist and Market Development. He focuses on identifying new market segments and is involved in developing and implementing new product features to serve the unmet needs. Jason has enjoyed sharing his career experiences since 2012. He has been invited as a panelist to discuss career development in several organizations. He is currently serving as a member of the Professor Rounds Program organized by the American Society for Biochemistry and Molecular Biology.</p>	Yes/No	https://www.linkedin.com/in/jasonctl
workshop1	Michael Dubrosky		Co-founder, SiPhox	Michael_Dubrovsky.png	<p>Michael Dubrovsky is a serial entrepreneur, scientist, and a co-founder of SiPhox. SiPhox is a Khosla Ventures and Y Combinator-backed Boston startup that is miniaturizing proteomics using silicon photonic chips. Michael is also a co-founder at PoWx, an optical computing research non-profit focused on decreasing Bitcoin’s energy consumption. Before SiPhox, he was a researcher at MIT and Technion, studying dewetting processes in thin-film materials. Previously, Michael co-founded a commercial electric vehicle charging startup, Simply Grid, which was acquired by MOVE Systems, where Michael spent several years establishing a supply chain in Asia and a factory in Grand Rapids, Michigan.</P>	Yes/No	`;

const tsv_array = tsv_str
	.split('\n')
	.map(el => el.split('\t'))
	.filter(el => el[1])
	.map(el => {
		return {
			'name': el[1].trim() || null,
			'nameCh': el[2] || null,
			'affiliations': el[3] ? el[3].split(';') : [],
			'imgFileName': el[4] || 'placeholder.jpg',
			'links': el[7] ? el[7].split(';') : [],
			'description': el[5] || ''
		};
	});

const tsv_dict = {};

tsv_array.forEach(el => {
	el.name.trim() in Object.keys(tsv_dict)
		? false
		:  tsv_dict[el.name.trim()] = el;
});

export const speakersObj = tsv_dict;
