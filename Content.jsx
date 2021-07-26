import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Imc from './Imc';
import Informacao from './Informacao';
import Informacao1 from './Informacao1';
import Informacao2 from './Informacao2';
import { styles } from './styles/style';




export default function Content() {
  return (


    <ScrollView>
      <View style={styles.content}>


        <Informacao boasVindas="Sejam bem vindos ao SoulHealth" curiosidades="O seu conteúdo diário sobre Saúde" />


        <Text>{'\n'}</Text>
        <Informacao1 titulo="A chave principal para uma boa alimentação são os produtos “in natura”" conteudo="A importância de uma alimentação saudável é fato consumado. Mas, ainda assim, o tema deixa dúvidas e há espaço para muita desinformação. Em entrevista ao Jornal da USP no Ar Primeira Edição, a nutricionista Maria Aquimara Zambone, do Hospital das Clínicas da Faculdade de Medicina da USP, explica o que é uma alimentação saudável e como mantê-la. 

        Atualmente, não há nenhuma dúvida quanto à influência de uma alimentação saudável e adequada na prevenção de doenças crônicas como obesidade, diabete, hipertensão, muito comuns na sociedade brasileira, afirma a nutricionista. 

        No Brasil, existe um Guia Alimentar para a População Brasileira, desenvolvido pelo Ministério da Saúde. “É um dos melhores que existem no mundo”, diz. O livro conta com uma série de passos a serem seguidos para manter uma alimentação saudável. Entre eles, Maria Aquimara destaca o consumo de alimentos in natura. " autor="Nutricionista Maria Aquimara Zambone" />
        
        <Text>{'\n'}</Text>
        <Informacao1 titulo="Alimentação saudável favorece o bom funcionamento do sistema imune" conteudo="A covid-19 é uma doença nova sobre a qual existem poucos estudos científicos que relacionem alimentação e resistência imunológica para enfrentá-la. Mas inúmeras pesquisas, feitas em laboratórios ou estudos clínicos, que avaliaram o efeito de nutrientes em outras infecções causadas por vírus, semelhantes ao novo coronavírus, podem ajudar a entender essa relação. 

        A professora Selma Freire de Carvalho da Cunha, da área de Nutrologia da Faculdade de Medicina de Ribeirão Preto (FMRP) da USP, explica que a defesa do nosso organismo contra infecções depende do bom funcionamento do sistema imune. “Como os nutrientes presentes nos alimentos influenciam no sistema imune, podemos dizer que sim, que a alimentação tem um papel tanto na predisposição, ou seja, na tendência a desenvolver doenças, como na proteção contra as doenças infecciosas, até mesmo as causadas por vírus.” 

        Baseada nesses conhecimentos, a professora afirma que manter uma alimentação equilibrada favorece um sistema imune adequado. “É importante o consumo de alimentos vegetais ricos em fibras que favorecem o crescimento de bactérias consideradas benéficas em nosso intestino. O resultado é a melhora nos mecanismos de defesa imune frente às infecções.” 

        Sobre a vitamina D, a professora explica que os alimentos ricos nessa vitamina, como arenque, ostras e salmão, não são de consumo habitual em nossa região, mas leites fortificados, carnes e ovos cozidos contêm quantidades satisfatórias. E lembra, “nosso corpo consegue formar a vitamina D a partir da exposição solar, isso significa que é possível manter os níveis normais dela no sangue se expondo ao sol num período de 15 a 30 minutos por dia; claro, nos horários indicados pelos dermatologistas”.  " autor="Rose Talamone" />
        
        <Text>{'\n'}</Text>
        <Informacao1 titulo="Qualidade nutricional da dieta brasileira pode melhorar com pequenas mudanças" conteudo="Fazer mudanças na dieta costuma ser uma tarefa árdua: sem a devida disciplina, é muito fácil voltar à alimentação com a qual já estamos acostumados. Considerando esse fator, um estudo publicado na revista científica PLOS ONE buscou encontrar as alternativas de dietas nutricionalmente adequadas que mais se aproximam dos hábitos alimentares dos brasileiros. 

        Conforme mostraram os resultados, é possível atingir um nível saudável com poucas alterações na dieta, e, na maioria dos casos, sem aumento de custo. Os dados foram contabilizados tendo como base a última Pesquisa de Orçamentos Familiares (POF) realizada pelo IBGE, em 2008-2009. Nos valores da época, o custo mínimo estimado para ter uma dieta nutricionalmente adequada, por dia, era de R$ 5,96 por pessoa.

        O estudo é de autoria do professor Eliseu Verly Junior, do Instituto de Medicina Social da Universidade do Estado do Rio de Janeiro (UERJ), e tem colaboração da professora Flavia Mori Sarti, da Escola de Artes, Ciências e Humanidades (EACH) da USP.

        Dieta sob medida
        Os números foram calculados seguindo uma técnica de otimização de dados, cujo objetivo era encontrar a dieta nutricionalmente saudável de menor custo e mais próxima do culturalmente aceito em cada local do Brasil. Ao todo, foram analisadas 108 pequenas regiões, as mesmas consideradas pelo IBGE na POF.

        “Planejar o que as pessoas deveriam comer para melhorar a ingestão de nutrientes não é tão difícil, mas a questão é que as pessoas têm seus hábitos alimentares, suas culturas, e não dá certo simplesmente dizer o que elas precisam comer sem considerar o que elas aceitam”, explica Eliseu.

        Dessa forma foi possível verificar, por exemplo, que o consumo de peixe e frutos do mar é mais bem aceito na região Norte, onde esses produtos costumam ser também mais baratos, e por isso eles podem representar um papel maior na ingestão de nutrientes do que em outros lugares. Outro dado é que o País inteiro mantém um consumo de carne vermelha e processada mais alto que o recomendado, sobretudo na região Sul. Já o consumo de frutas e vegetais é menor que o ideal." autor="Matheus Souza" />
        
        
        <Imc />
        <Text>{'\n'}</Text> 

        <Informacao2 exercicios1="Polichinelo completo Em pé, com as pernas unidas e os braços estendidos ao lado do corpo, dê um salto para cima. Ao mesmo tempo, afaste os pés lateralmente e bata as mãos acima da cabeça. Volte para a posição inicial e depois agache, tocando as mãos no solo. Estenda as pernas e repita o exercício..." />
        <Informacao2 exercicios2="Agachamento com deslocamento lateral Em pé, fique com as pernas unidas e coloque as mãos na cintura. Dê um passo para o lado. Estenda os braços à frente, contraia o abdome e agache até suas coxas ficarem paralelas ao chão. Volte para a posição inicial e execute o movimento para o outro lado..." />
      
      </View>
    </ScrollView>

  );
}