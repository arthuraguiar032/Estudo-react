import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function List_Courses() {
    let products = [
        {
          "id": 1,
          "nome": "Introdução à Programação em Python",
          "sigla": "IPP",
          "data_inicio": "2024-04-16",
          "data_fim": "2024-06-01",
          "descricao": "Curso introdutório sobre programação em Python, abordando conceitos básicos e práticos."
        },
        {
          "id": 2,
          "nome": "Desenvolvimento Web com HTML, CSS e JavaScript",
          "sigla": "DW-HTMLCSSJS",
          "data_inicio": "2024-05-01",
          "data_fim": "2024-07-15",
          "descricao": "Curso prático sobre desenvolvimento web, cobrindo os fundamentos de HTML, CSS e JavaScript."
        },
        {
          "id": 3,
          "nome": "Machine Learning e Inteligência Artificial",
          "sigla": "MLIA",
          "data_inicio": "2024-06-10",
          "data_fim": "2024-08-30",
          "descricao": "Curso avançado sobre machine learning e inteligência artificial, com aplicação prática em diversos domínios."
        },
        {
          "id": 4,
          "nome": "Marketing Digital e Mídias Sociais",
          "sigla": "MDMS",
          "data_inicio": "2024-07-05",
          "data_fim": "2024-09-20",
          "descricao": "Curso abrangente sobre estratégias de marketing digital e uso eficaz de mídias sociais para empresas."
        },
        {
          "id": 5,
          "nome": "Gestão de Projetos com Agile e Scrum",
          "sigla": "GPAS",
          "data_inicio": "2024-08-20",
          "data_fim": "2024-11-10",
          "descricao": "Curso prático sobre metodologias ágeis de gestão de projetos, com foco em Scrum e Agile."
        },
        {
          "id": 6,
          "nome": "Inglês para Negócios",
          "sigla": "IN",
          "data_inicio": "2024-09-01",
          "data_fim": "2024-10-30",
          "descricao": "Curso intensivo de inglês voltado para profissionais de negócios, focado em comunicação e vocabulário específico."
        },
        {
          "id": 7,
          "nome": "Design Gráfico e Adobe Creative Suite",
          "sigla": "DG-ACS",
          "data_inicio": "2024-10-10",
          "data_fim": "2024-12-05",
          "descricao": "Curso abrangente sobre design gráfico e uso das ferramentas da Adobe Creative Suite, como Photoshop, Illustrator e InDesign."
        },
        {
          "id": 8,
          "nome": "Educação Financeira e Investimentos",
          "sigla": "EFI",
          "data_inicio": "2024-11-05",
          "data_fim": "2025-01-15",
          "descricao": "Curso introdutório sobre princípios de educação financeira e estratégias de investimento para iniciantes."
        },
        {
          "id": 9,
          "nome": "Desenvolvimento de Aplicativos para Dispositivos Móveis",
          "sigla": "DADM",
          "data_inicio": "2025-01-10",
          "data_fim": "2025-03-20",
          "descricao": "Curso prático sobre desenvolvimento de aplicativos móveis para iOS e Android, cobrindo conceitos básicos e avançados."
        },
        {
          "id": 10,
          "nome": "Administração de Redes e Segurança da Informação",
          "sigla": "ARSI",
          "data_inicio": "2025-02-15",
          "data_fim": "2025-05-05",
          "descricao": "Curso avançado sobre administração de redes e segurança da informação, abordando protocolos, firewalls e boas práticas de segurança."
        },
        {
          "id": 11,
          "nome": "Fotografia Digital e Edição de Imagens",
          "sigla": "FDEI",
          "data_inicio": "2025-03-01",
          "data_fim": "2025-05-20",
          "descricao": "Curso prático sobre fotografia digital, cobrindo técnicas de composição e edição de imagens usando softwares como Adobe Lightroom e Photoshop."
        },
        {
          "id": 12,
          "nome": "Gestão de Recursos Humanos e Liderança",
          "sigla": "GRHL",
          "data_inicio": "2025-04-10",
          "data_fim": "2025-06-30",
          "descricao": "Curso abrangente sobre gestão de recursos humanos, focando em recrutamento, desenvolvimento de equipes e liderança eficaz."
        },
        {
          "id": 13,
          "nome": "Desenvolvimento Sustentável e Responsabilidade Social Corporativa",
          "sigla": "DSRSC",
          "data_inicio": "2025-05-05",
          "data_fim": "2025-07-25",
          "descricao": "Curso introdutório sobre desenvolvimento sustentável e práticas de responsabilidade social corporativa para empresas e organizações."
        },
        {
          "id": 14,
          "nome": "E-commerce: Estratégias de Vendas Online",
          "sigla": "ECESVO",
          "data_inicio": "2025-06-15",
          "data_fim": "2025-09-05",
          "descricao": "Curso prático sobre estratégias de vendas online e operação de e-commerce, cobrindo desde a criação da loja virtual até técnicas avançadas de marketing."
        },
        {
          "id": 15,
          "nome": "Inteligência Emocional e Gestão de Conflitos",
          "sigla": "IEGC",
          "data_inicio": "2025-07-01",
          "data_fim": "2025-09-30",
          "descricao": "Curso sobre inteligência emocional e técnicas de gestão de conflitos, focando em habilidades interpessoais e comunicação eficaz."
        },
        {
          "id": 16,
          "nome": "Culinária Internacional: Técnicas e Receitas",
          "sigla": "CITR",
          "data_inicio": "2025-08-20",
          "data_fim": "2025-11-10",
          "descricao": "Curso prático sobre culinária internacional, cobrindo técnicas de preparo e receitas tradicionais de diversos países."
        },
        {
          "id": 17,
          "nome": "Gestão de Marketing e Branding",
          "sigla": "GMB",
          "data_inicio": "2025-09-05",
          "data_fim": "2025-11-30",
          "descricao": "Curso avançado sobre gestão de marketing e branding, abordando estratégias de posicionamento de marca e comunicação eficaz."
        },
        {
          "id": 18,
          "nome": "Desenvolvimento Pessoal e Produtividade",
          "sigla": "DPP",
          "data_inicio": "2025-10-10",
          "data_fim": "2025-12-30",
          "descricao": "Curso sobre desenvolvimento pessoal e técnicas de produtividade, focando em autoconhecimento e organização pessoal."
        },
        {
          "id": 19,
          "nome": "Gestão de Projetos com Microsoft Project",
          "sigla": "GPMP",
          "data_inicio": "2025-11-05",
          "data_fim": "2026-01-30",
          "descricao": "Curso prático sobre gestão de projetos com Microsoft Project, abordando desde o planejamento até o acompanhamento e controle de projetos."
        },
        {
          "id": 20,
          "nome": "Empreendedorismo e Inovação",
          "sigla": "EI",
          "data_inicio": "2026-01-10",
          "data_fim": "2026-03-30",
          "descricao": "Curso abrangente sobre empreendedorismo e inovação, com foco em startups, modelos de negócios e estratégias de crescimento."
        }
    ]
    
    return (
        <>
            <h1>Cursos</h1>
            <DataTable value={products} paginator rows={5} tableStyle={{ minWidth: '50rem' }}>
                <Column field="nome" header="Nome"></Column>
                <Column field="sigla" header="Sigla"></Column>
                <Column field="data_inicio" header="Data Inicio"></Column>
                <Column field="data_fim" header="Data Fim"></Column>
                <Column field="descricao" header="Descrição"></Column>
            </DataTable>
        </> 
    )
}