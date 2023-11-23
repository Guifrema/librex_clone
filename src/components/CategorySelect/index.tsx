import React from 'react';
import { Select } from 'antd';
import { useRouter } from 'next/navigation'


const options = [
    {
        value: '0',
        label: 'Cidade',
    },
    {
        value: '1',
        label: 'Município',
    },
    {
        value: '2',
        label: 'Cidade do Sudeste',
    },
    {
        value: '3',
        label: 'Município do Sudeste',
    },
    {
        value: '4',
        label: 'Cidade Mineira',
    },
    {
        value: '5',
        label: 'Município Mineiro',
    },
    {
        value: '6',
        label: 'Cidade Fluminense',
    },
    {
        value: '7',
        label: 'Município Fluminense',
    },
    {
        value: '8',
        label: 'Capital',
    },
    {
        value: '9',
        label: 'Cidade Capixaba',
    },
    {
        value: '10',
        label: 'Município Capixaba',
    },
    {
        value: '11',
        label: 'Cidade Paulista',
    },
    {
        value: '12',
        label: 'Município Paulista',
    },
    {
        value: '13',
        label: 'Cidade Gaúcha',
    },
    {
        value: '14',
        label: 'Município Gaúcho',
    },
    {
        value: '15',
        label: 'Cidade Catarinense',
    },
    {
        value: '16',
        label: 'Município Catarinense',
    },
    {
        value: '17',
        label: 'Cidade Paranaense',
    },
    {
        value: '18',
        label: 'Município Paranaense',
    },
    {
        value: '19',
        label: 'Cidade Goiana',
    },
    {
        value: '20',
        label: 'Município Goiano',
    },
    {
        value: '21',
        label: 'Cidade Sul-mato-grossense',
    },
    {
        value: '22',
        label: 'Município Sul-mato-grossense',
    },
    {
        value: '23',
        label: 'Cidade Mato-grossense',
    },
    {
        value: '24',
        label: 'Município Mato-grossense',
    },
    {
        value: '25',
        label: 'Cidade do Sul',
    },
    {
        value: '26',
        label: 'Município do Sul',
    },
    {
        value: '27',
        label: 'Cidade do Centro-Oeste',
    },
    {
        value: '28',
        label: 'Município do Centro-Oeste',
    },
    {
        value: '29',
        label: 'Cidade do Norte',
    },
    {
        value: '30',
        label: 'Município do Norte',
    },
    {
        value: '31',
        label: 'Cidade Amazonense',
    },
    {
        value: '32',
        label: 'Município Amazonense',
    },
    {
        value: '33',
        label: 'Cidade Acreana',
    },
    {
        value: '34',
        label: 'Município Acreano',
    },
    {
        value: '35',
        label: 'Estado (to do)',
    },
    {
        value: '36',
        label: 'Cidade Roraimense',
    },
    {
        value: '37',
        label: 'Município Roraimense',
    },
    {
        value: '38',
        label: 'Cidade Amapaense',
    },
    {
        value: '39',
        label: 'Município Amapaense',
    },
    {
        value: '40',
        label: 'Cidade Paraense',
    },
    {
        value: '41',
        label: 'Município Paraense',
    },
    {
        value: '42',
        label: 'Cidade Tocantinense',
    },
    {
        value: '43',
        label: 'Município Tocantinense',
    },
    {
        value: '44',
        label: 'Cidade Rondonense',
    },
    {
        value: '45',
        label: 'Município Rondonense',
    },
    {
        value: '46',
        label: 'Cidade do Nordeste',
    },
    {
        value: '47',
        label: 'Município do Nordeste',
    },
    {
        value: '48',
        label: 'Cidade Baiana',
    },
    {
        value: '49',
        label: 'Município Baiano',
    },
    {
        value: '50',
        label: 'Cidade Sergipana',
    },
    {
        value: '51',
        label: 'Município Segipano',
    },
    {
        value: '52',
        label: 'Cidade Alagoana',
    },
    {
        value: '53',
        label: 'Município Alagoano',
    },
    {
        value: '54',
        label: 'Cidade Pernambucana',
    },
    {
        value: '55',
        label: 'Município Pernambucano',
    },
    {
        value: '56',
        label: 'Cidade Paraibana',
    },
    {
        value: '57',
        label: 'Município Paraibano',
    },
    {
        value: '58',
        label: 'Cidade Potiguar',
    },
    {
        value: '59',
        label: 'Município Portiguar',
    },
    {
        value: '60',
        label: 'Cidade Cearense',
    },
    {
        value: '61',
        label: 'Município Cearense',
    },
    {
        value: '62',
        label: 'Cidade Piauiense',
    },
    {
        value: '63',
        label: 'Município Piauiense',
    },
    {
        value: '64',
        label: 'Cidade Maranhense',
    },
    {
        value: '65',
        label: 'Município Maranhense',
    },
    {
        value: '66',
        label: 'Química',
    },
    {
        value: '67',
        label: 'Disciplina',
    },
    {
        value: '68',
        label: 'Ciência',
    },
    {
        value: '69',
        label: 'Área do conhecimento',
    },
    {
        value: '70',
        label: 'Física',
    },
    {
        value: '71',
        label: 'Educação',
    },
    {
        value: '72',
        label: 'Ciências Biológicas',
    },
    {
        value: '73',
        label: 'Biologia',
    },
    {
        value: '74',
        label: 'Matemática',
    },
    {
        value: '75',
        label: 'Medicina',
    },
    {
        value: '76',
        label: 'Saúde',
    },
];


const CategorySelect: React.FC = () => {
    const router = useRouter();

    const onChange = (value: string) => {
        router.push(`/category/${value}`)
    };

    // Filter `option.label` match the user type `input`
    const filterOption = (input: string, option?: { label: string; value: string }) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    return <Select
        style={{minWidth: "250px", minHeight: "50px", fontSize: "18px"}}
        showSearch
        placeholder="Select a person"
        optionFilterProp="children"
        onChange={onChange}
        filterOption={filterOption}
        options={options}
    />
};

export default CategorySelect;