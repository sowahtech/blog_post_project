import React from 'react'
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import virus1 from '../../assets/spanish_flu.png'
import virus2 from '../../assets/swine_flu.png'
import virus3 from '../../assets/ebola.png'
import virus4 from '../../assets/corona.png'
import profile1 from '../../assets/paul.png'
import profile2 from '../../assets/kellyprofile.png'
import profile3 from '../../assets/keith-profile.png'
import profile4 from '../../assets/anna-pix.png'
import BlogArticle from '../components/BlogArticle'

export default function BlogArticelList({navigation}) {
	const blog_data =
		[
			{ image: virus1, title: "The deadliest World virus, the Spanish Flu", author_image: profile1, authName: "Dr. Harold King", minutes: "4 minutes", dot: ".", image_background: "pink", details: "The Spanish flu, also known as the 1918 flu pandemic, was an unusually deadly influenza pandemic caused by the H1N1 influenza A virus. Lasting from February 1918 to April 1920, it infected 500 million people – about a third of the world's population at the time – in four successive waves. The death toll is typically estimated to have been somewhere between 20 million and 50 million, although estimates range from a conservative 17 million to a possible high of 100 million, making it one of the deadliest pandemics in human history. The first observations of illness and mortality were documented in the United States (in Kansas) in March 1918 and then in April in France, Germany and the United Kingdom. To maintain morale, World War I censors minimized these early reports. Newspapers were free to report the epidemic's effects in neutral Spain, such as the grave illness of King Alfonso XIII, and these stories created a false impression of Spain as especially hard hit. This gave rise to the name 'Spanish' flu. Historical and epidemiological data are inadequate to identify with certainty the pandemic's geographic origin, with varying views as to its location.[2]" },
			{ image: virus2, title: "Named after the pig, the Swine Flu", author_image: profile2, authName: "Dr. Hiro Shima", minutes: "8 minutes", dot: ".", image_background: "#EEACE0", details: "Swine influenza is an infection caused by any one of several types of swine influenza viruses. Swine influenza virus (SIV) or swine-origin influenza virus (S-OIV) is any strain of the influenza family of viruses that is endemic in pigs.[2] As of 2009, the known SIV strains include influenza C and the subtypes of influenza A known as H1N1, H1N2, H2N1, H3N1, H3N2, and H2N3. Swine influenza virus is common throughout pig populations worldwide. Transmission of the virus from pigs to humans is not common and does not always lead to human flu, often resulting only in the production of antibodies in the blood. If transmission does cause human flu, it is called zoonotic swine flu. People with regular exposure to pigs are at increased risk of swine flu infection. Around the mid-20th century, identification of influenza subtypes became possible, allowing accurate diagnosis of transmission to humans. Since then, only 50 such transmissions have been confirmed. These strains of swine flu rarely pass from human to human. Symptoms of zoonotic swine flu in humans are similar to those of influenza and of influenza-like illness in general, namely chills, fever, sore throat, muscle pains, severe headache, coughing, weakness, shortness of breath, and general discomfort."},
			{ image: virus3, title: "Ravaged Africa, the deadly Ebola Virus", author_image: profile3, authName: "Dr. Naga Saki", minutes: "30 minutes", dot: ".", image_background: "#DEDBDD", details: "Ebola, also known as Ebola virus disease (EVD) or Ebola hemorrhagic fever (EHF), is a viral hemorrhagic fever of humans and other primates caused by ebolaviruses.[1] Signs and symptoms typically start between two days and three weeks after contracting the virus with a fever, sore throat, muscular pain, and headaches.[1] Vomiting, diarrhoea and rash usually follow, along with decreased function of the liver and kidneys.[1] At this time, some people begin to bleed both internally and externally.[1] The disease has a high risk of death, killing 25% to 90% of those infected, with an average of about 50%.[1] This is often due to low blood pressure from fluid loss, and typically follows six to 16 days after symptoms appear.[2] The virus spreads through direct contact with body fluids, such as blood from infected humans or other animals.[1] Spread may also occur from contact with items recently contaminated with bodily fluids.[1] Spread of the disease through the air between primates, including humans, has not been documented in either laboratory or natural conditions.[3] Semen or breast milk of a person after recovery from EVD may carry the virus for several weeks to months.[1][4][5] Fruit bats are believed to be the normal carrier in nature, able to spread the virus without being affected by it.[1] Other diseases such as malaria, cholera, typhoid fever, meningitis and other viral haemorrhagic fevers may resemble EVD.[1] Blood samples are tested for viral RNA, viral antibodies or for the virus itself to confirm the diagnosis.[1][6]" },
			{ image: virus4, title: "Novel virus locks the world down-Corona", author_image: profile4, authName: "Dr. Chu Shu", minutes: "16 minutes", dot: ".", image_background: "#FDE7CB", details: "Coronaviruses are a group of related RNA viruses that cause diseases in mammals and birds. In humans and birds, they cause respiratory tract infections that can range from mild to lethal. Mild illnesses in humans include some cases of the common cold (which is also caused by other viruses, predominantly rhinoviruses), while more lethal varieties can cause SARS, MERS, and COVID-19. In cows and pigs they cause diarrhea, while in mice they cause hepatitis and encephalomyelitis.Coronaviruses constitute the subfamily Orthocoronavirinae, in the family Coronaviridae, order Nidovirales, and realm Riboviria.[5][4] They are enveloped viruses with a positive-sense single-stranded RNA genome and a nucleocapsid of helical symmetry.[6] The genome size of coronaviruses ranges from approximately 26 to 32 kilobases, one of the largest among RNA viruses.[7] They have characteristic club-shaped spikes that project from their surface, which in electron micrographs create an image reminiscent of the solar corona, from which their name derives.[8]"}
		]

	return (
		<View style={styles.container}>
			<FlatList
				data={blog_data}
				renderItem={({ item }) => {
					return <TouchableOpacity onPress={()=>{
						navigation.navigate("Details", {image:item.image, title:item.title, author_image:item.author_image, author_name:item.authName, minutes:item.minutes, dot:item.dot, background:item.image_background, details:item.details })
					}}>
						<BlogArticle
							image={item.image}
							title={item.title}
							author_image={item.author_image}
							author_name={item.authName}
							minute={item.minutes}
							dot={item.dot}
							background={item.image_background} />
					</TouchableOpacity>
				}}
				keyExtractor={(item) => (item.minutes)}
			/>

		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 15,
		marginVertical: 10,

	}
});
