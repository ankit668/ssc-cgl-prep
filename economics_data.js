const economicsData = {
    chapter: "Economics Complete",
    notes: `
        <!-- STRICT PDF EXTRACTION: ECONOMICS -->
        <h2>ECONOMICS (Strict PDF Extraction)</h2>
        
        <h3>1. BASICS OF ECONOMY</h3>
        <ul>
            <li><strong>Economics:</strong> The study of how people, businesses, and governments use limited resources to produce, distribute, and consume goods and services.</li>
            <li><strong>Father of Economics:</strong> Adam Smith. He wrote <em>The Wealth of Nations (1776)</em>.</li>
            <li><strong>Macroeconomics:</strong> Studies the economy as a whole (aggregate demand, inflation, national income). John Maynard Keynes is the Father of Macroeconomics.</li>
            <li><strong>Microeconomics:</strong> Studies individual units (demand, supply, individual markets). Alfred Marshall is known for his work <em>Principles of Economics (1890)</em>.</li>
            <li><strong>Sectors of Economy:</strong> Primary (Agriculture, Mining), Secondary (Manufacturing, Industry), Tertiary (Services), Quaternary (Knowledge sector), Quinary (Top-level decisions).</li>
            <li><strong>Types of Economy:</strong> Capitalist (Market driven), Socialist (State controlled), Mixed (Both private & public). India is a Mixed Economy.</li>
        </ul>

        <h3>2. MICROECONOMICS</h3>
        <ul>
            <li><strong>Law of Demand:</strong> Inverse relationship between price and quantity demanded. As price falls, demand rises.</li>
            <li><strong>Law of Supply:</strong> Direct relationship between price and quantity supplied. As price rises, supply rises.</li>
            <li><strong>Elasticity:</strong> Responsiveness of demand/supply to price changes. Perfectly elastic (horizontal curve), Perfectly inelastic (vertical curve).</li>
            <li><strong>Substitute vs Complementary Goods:</strong> Substitutes (Tea & Coffee) - price of one increases demand for other. Complements (Car & Petrol) - price of one decreases demand for other.</li>
            <li><strong>Market Structures:</strong> Perfect Competition (many sellers, identical products), Monopoly (single seller), Monopolistic Competition (many sellers, differentiated products), Oligopoly (few large sellers).</li>
        </ul>

        <h3>3. NATIONAL INCOME</h3>
        <ul>
            <li><strong>GDP (Gross Domestic Product):</strong> Total market value of all final goods and services produced within a country in a year.</li>
            <li><strong>GNP (Gross National Product):</strong> GDP + Net Factor Income from Abroad (NFIA).</li>
            <li><strong>NDP & NNP:</strong> NDP = GDP - Depreciation. NNP = GNP - Depreciation.</li>
            <li><strong>National Income (NI):</strong> NNP at Factor Cost (NNPfc).</li>
            <li><strong>CSO (Central Statistics Office):</strong> Responsible for computing National Income in India. First estimate by Dadabhai Naoroji in 1867-68.</li>
        </ul>

        <h3>4. BUDGET AND TAXATION</h3>
        <ul>
            <li><strong>Annual Financial Statement:</strong> Article 112 of the Constitution refers to the Budget.</li>
            <li><strong>Direct Taxes:</strong> Impact and incidence are on the same person (Income Tax, Corporate Tax, Wealth Tax).</li>
            <li><strong>Indirect Taxes:</strong> Impact and incidence are on different persons (GST, Excise Duty, Customs).</li>
            <li><strong>GST (Goods and Services Tax):</strong> Introduced by the 101st Amendment Act, 2016. It is an indirect, destination-based tax.</li>
        </ul>

        <h3>5. INFLATION AND UNEMPLOYMENT</h3>
        <ul>
            <li><strong>Inflation:</strong> A sustained increase in the general price level of goods and services. Measured by CPI (Consumer Price Index) and WPI (Wholesale Price Index).</li>
            <li><strong>Stagflation:</strong> High inflation combined with high unemployment and stagnant growth.</li>
            <li><strong>Types of Unemployment:</strong> 
                <em>Disguised</em> (more people working than needed, marginal productivity is zero - common in agriculture), 
                <em>Structural</em> (mismatch of skills), 
                <em>Frictional</em> (temporary, during job switch), 
                <em>Cyclical</em> (due to recession).</li>
        </ul>

        <h3>6. BANKING AND MONETARY POLICY</h3>
        <ul>
            <li><strong>RBI (Reserve Bank of India):</strong> Established on April 1, 1935 (Hilton Young Commission). Nationalized in 1949.</li>
            <li><strong>Functions of RBI:</strong> Issuer of currency, Banker to the Government, Banker's Bank, Controller of Credit, Custodian of Forex reserves.</li>
            <li><strong>Monetary Policy Tools:</strong>
                <ul>
                    <li><strong>Repo Rate:</strong> Rate at which RBI lends short-term money to banks.</li>
                    <li><strong>Reverse Repo Rate:</strong> Rate at which RBI borrows from banks.</li>
                    <li><strong>CRR (Cash Reserve Ratio):</strong> Percentage of deposits banks must keep with RBI in cash.</li>
                    <li><strong>SLR (Statutory Liquidity Ratio):</strong> Percentage of deposits banks must keep with themselves in liquid assets (gold, govt securities).</li>
                </ul>
            </li>
        </ul>

        <h3>7. FIVE YEAR PLANS AND NITI AAYOG</h3>
        <ul>
            <li><strong>Planning Commission:</strong> Set up in 1950. Replaced by NITI Aayog on Jan 1, 2015.</li>
            <li><strong>1st Plan (1951-56):</strong> Harrod-Domar Model. Focus on Agriculture.</li>
            <li><strong>2nd Plan (1956-61):</strong> Mahalanobis Model. Focus on Heavy Industries.</li>
            <li><strong>5th Plan (1974-79):</strong> Focus on Poverty Alleviation (Garibi Hatao).</li>
            <li><strong>NITI Aayog:</strong> Think tank of Govt of India. Chairperson is the Prime Minister.</li>
        </ul>
`,
    mcqs: [
    {
        "id": "eco_1",
        "subject": "economics",
        "topic": "Basics of Economy",
        "question": "Who is known as the Father of Economics?",
        "options": [
            "John Maynard Keynes",
            "Adam Smith",
            "Karl Marx",
            "Alfred Marshall"
        ],
        "correct": 1,
        "explanation": "Adam Smith is known as the Father of Economics and wrote 'The Wealth of Nations' (1776)."
    },
    {
        "id": "eco_2",
        "subject": "economics",
        "topic": "Basics of Economy",
        "question": "Which sector of the economy is also known as the service sector?",
        "options": [
            "Primary Sector",
            "Secondary Sector",
            "Tertiary Sector",
            "Quaternary Sector"
        ],
        "correct": 2,
        "explanation": "The Tertiary Sector involves the provision of services (e.g., banking, transport)."
    },
    {
        "id": "eco_3",
        "subject": "economics",
        "topic": "Basics of Economy",
        "question": "India operates under which type of economic system?",
        "options": [
            "Capitalist Economy",
            "Socialist Economy",
            "Mixed Economy",
            "Traditional Economy"
        ],
        "correct": 2,
        "explanation": "India is a Mixed Economy, combining features of both capitalist (private) and socialist (public) systems."
    },
    {
        "id": "eco_4",
        "subject": "economics",
        "topic": "Basics of Economy",
        "question": "Who is considered the Father of Macroeconomics?",
        "options": [
            "Adam Smith",
            "John Maynard Keynes",
            "Lionel Robbins",
            "Amartya Sen"
        ],
        "correct": 1,
        "explanation": "John Maynard Keynes is considered the Father of Macroeconomics."
    },
    {
        "id": "eco_5",
        "subject": "economics",
        "topic": "Basics of Economy",
        "question": "Agriculture, forestry, and fishing belong to which sector?",
        "options": [
            "Primary Sector",
            "Secondary Sector",
            "Tertiary Sector",
            "Quinary Sector"
        ],
        "correct": 0,
        "explanation": "The Primary Sector deals with the extraction and harvesting of natural resources."
    },
    {
        "id": "eco_6",
        "subject": "economics",
        "topic": "Basics of Economy",
        "question": "Knowledge-based industries like IT and R&D fall under?",
        "options": [
            "Primary Sector",
            "Secondary Sector",
            "Tertiary Sector",
            "Quaternary Sector"
        ],
        "correct": 3,
        "explanation": "The Quaternary sector is the knowledge-based part of the economy."
    },
    {
        "id": "eco_7",
        "subject": "economics",
        "topic": "Basics of Economy",
        "question": "In a Capitalist economy, the prices are determined by?",
        "options": [
            "Government Authorities",
            "Central Planning",
            "Demand and Supply",
            "Monopolies"
        ],
        "correct": 2,
        "explanation": "In a free market/capitalist economy, prices are determined by market forces (demand and supply)."
    },
    {
        "id": "eco_8",
        "subject": "economics",
        "topic": "Basics of Economy",
        "question": "'The Wealth of Nations' was published in which year?",
        "options": [
            "1776",
            "1890",
            "1936",
            "1867"
        ],
        "correct": 0,
        "explanation": "Adam Smith published 'An Inquiry into the Nature and Causes of the Wealth of Nations' in 1776."
    },
    {
        "id": "eco_9",
        "subject": "economics",
        "topic": "Microeconomics",
        "question": "According to the Law of Demand, what is the relationship between price and quantity demanded?",
        "options": [
            "Direct",
            "Inverse",
            "Proportional",
            "No relationship"
        ],
        "correct": 1,
        "explanation": "The Law of Demand states that price and quantity demanded are inversely related."
    },
    {
        "id": "eco_10",
        "subject": "economics",
        "topic": "Microeconomics",
        "question": "Tea and Coffee are examples of?",
        "options": [
            "Complementary Goods",
            "Substitute Goods",
            "Giffen Goods",
            "Veblen Goods"
        ],
        "correct": 1,
        "explanation": "Tea and coffee are substitute goods. If tea prices rise, coffee demand increases."
    },
    {
        "id": "eco_11",
        "subject": "economics",
        "topic": "Microeconomics",
        "question": "Car and Petrol are examples of?",
        "options": [
            "Substitute Goods",
            "Complementary Goods",
            "Inferior Goods",
            "Public Goods"
        ],
        "correct": 1,
        "explanation": "They are complementary goods; they are used together."
    },
    {
        "id": "eco_12",
        "subject": "economics",
        "topic": "Microeconomics",
        "question": "If a firm is a 'Price Taker', it operates in which market structure?",
        "options": [
            "Monopoly",
            "Oligopoly",
            "Perfect Competition",
            "Monopolistic Competition"
        ],
        "correct": 2,
        "explanation": "In Perfect Competition, firms have no market power and must accept the market price (Price Takers)."
    },
    {
        "id": "eco_13",
        "subject": "economics",
        "topic": "Microeconomics",
        "question": "A market with a single seller and many buyers is called?",
        "options": [
            "Oligopoly",
            "Monopsony",
            "Monopoly",
            "Perfect Competition"
        ],
        "correct": 2,
        "explanation": "A Monopoly has only one seller dominating the market."
    },
    {
        "id": "eco_14",
        "subject": "economics",
        "topic": "Microeconomics",
        "question": "A market with a few large sellers is known as?",
        "options": [
            "Monopoly",
            "Oligopoly",
            "Perfect Competition",
            "Monopolistic Competition"
        ],
        "correct": 1,
        "explanation": "Oligopoly is a market structure characterized by a small number of large firms."
    },
    {
        "id": "eco_15",
        "subject": "economics",
        "topic": "Microeconomics",
        "question": "In a perfectly inelastic demand curve, the shape of the curve is?",
        "options": [
            "Horizontal",
            "Downward sloping",
            "Vertical",
            "Upward sloping"
        ],
        "correct": 2,
        "explanation": "A perfectly inelastic demand curve is a vertical straight line (elasticity = 0)."
    },
    {
        "id": "eco_16",
        "subject": "economics",
        "topic": "Microeconomics",
        "question": "Goods whose demand decreases when consumer income increases are called?",
        "options": [
            "Normal Goods",
            "Inferior Goods",
            "Substitute Goods",
            "Veblen Goods"
        ],
        "correct": 1,
        "explanation": "Inferior goods see a drop in demand as consumer income rises."
    },
    {
        "id": "eco_17",
        "subject": "economics",
        "topic": "National Income",
        "question": "What is the formula for Gross National Product (GNP)?",
        "options": [
            "GDP - Depreciation",
            "GDP + Net Factor Income from Abroad",
            "NNP + Depreciation",
            "NDP + Net Factor Income from Abroad"
        ],
        "correct": 1,
        "explanation": "GNP = GDP + Net Factor Income from Abroad (NFIA)."
    },
    {
        "id": "eco_18",
        "subject": "economics",
        "topic": "National Income",
        "question": "National Income (NI) is equivalent to?",
        "options": [
            "Gross Domestic Product at Market Price",
            "Net National Product at Market Price",
            "Net National Product at Factor Cost",
            "Gross National Product at Factor Cost"
        ],
        "correct": 2,
        "explanation": "National Income is strictly NNP at Factor Cost (NNPfc)."
    },
    {
        "id": "eco_19",
        "subject": "economics",
        "topic": "National Income",
        "question": "Who made the first attempt to calculate National Income in India?",
        "options": [
            "V.K.R.V. Rao",
            "Dadabhai Naoroji",
            "P.C. Mahalanobis",
            "Amartya Sen"
        ],
        "correct": 1,
        "explanation": "Dadabhai Naoroji made the first estimate of National Income in 1867-68."
    },
    {
        "id": "eco_20",
        "subject": "economics",
        "topic": "National Income",
        "question": "The difference between Gross Domestic Product and Net Domestic Product is?",
        "options": [
            "Net Indirect Taxes",
            "Subsidies",
            "Depreciation",
            "Net Factor Income from Abroad"
        ],
        "correct": 2,
        "explanation": "NDP = GDP - Depreciation. The difference is Depreciation (consumption of fixed capital)."
    },
    {
        "id": "eco_21",
        "subject": "economics",
        "topic": "National Income",
        "question": "Which organization calculates National Income in India?",
        "options": [
            "Reserve Bank of India (RBI)",
            "National Sample Survey Office (NSSO)",
            "Central Statistics Office (CSO)",
            "NITI Aayog"
        ],
        "correct": 2,
        "explanation": "The Central Statistics Office (CSO) under MoSPI computes India's National Income."
    },
    {
        "id": "eco_22",
        "subject": "economics",
        "topic": "National Income",
        "question": "The value of all final goods and services produced within the geographic boundaries of a country in a year is?",
        "options": [
            "GNP",
            "NNP",
            "GDP",
            "NDP"
        ],
        "correct": 2,
        "explanation": "This is the exact definition of Gross Domestic Product (GDP)."
    },
    {
        "id": "eco_23",
        "subject": "economics",
        "topic": "National Income",
        "question": "Per Capita Income is calculated by dividing National Income by?",
        "options": [
            "Total Working Population",
            "Total Area of the Country",
            "Total Population of the Country",
            "Total Tax Revenue"
        ],
        "correct": 2,
        "explanation": "Per Capita Income = National Income / Total Population."
    },
    {
        "id": "eco_24",
        "subject": "economics",
        "topic": "National Income",
        "question": "Base year currently used for calculating GDP in India is?",
        "options": [
            "2004-05",
            "2011-12",
            "2015-16",
            "2020-21"
        ],
        "correct": 1,
        "explanation": "The base year was revised to 2011-12 by the CSO."
    },
    {
        "id": "eco_25",
        "subject": "economics",
        "topic": "Budget and Taxation",
        "question": "Which Article of the Indian Constitution deals with the 'Annual Financial Statement' (Budget)?",
        "options": [
            "Article 110",
            "Article 112",
            "Article 280",
            "Article 360"
        ],
        "correct": 1,
        "explanation": "Article 112 deals with the Annual Financial Statement, commonly known as the Budget."
    },
    {
        "id": "eco_26",
        "subject": "economics",
        "topic": "Budget and Taxation",
        "question": "Which of the following is an example of a Direct Tax?",
        "options": [
            "Goods and Services Tax (GST)",
            "Customs Duty",
            "Income Tax",
            "Excise Duty"
        ],
        "correct": 2,
        "explanation": "Income Tax is a direct tax, as the burden cannot be shifted to another person."
    },
    {
        "id": "eco_27",
        "subject": "economics",
        "topic": "Budget and Taxation",
        "question": "Which Constitutional Amendment introduced the Goods and Services Tax (GST)?",
        "options": [
            "100th Amendment",
            "101st Amendment",
            "102nd Amendment",
            "103rd Amendment"
        ],
        "correct": 1,
        "explanation": "The 101st Constitutional Amendment Act, 2016 introduced GST in India."
    },
    {
        "id": "eco_28",
        "subject": "economics",
        "topic": "Budget and Taxation",
        "question": "GST is a?",
        "options": [
            "Direct, origin-based tax",
            "Indirect, destination-based tax",
            "Direct, destination-based tax",
            "Indirect, origin-based tax"
        ],
        "correct": 1,
        "explanation": "GST is an indirect, destination-based consumption tax."
    },
    {
        "id": "eco_29",
        "subject": "economics",
        "topic": "Budget and Taxation",
        "question": "Corporation Tax is levied on?",
        "options": [
            "Wealth of individuals",
            "Net income of companies",
            "Goods imported",
            "Goods manufactured"
        ],
        "correct": 1,
        "explanation": "Corporate Tax or Corporation Tax is a direct tax levied on the net income/profit of companies."
    },
    {
        "id": "eco_30",
        "subject": "economics",
        "topic": "Budget and Taxation",
        "question": "A tax whose rate increases as the income increases is called?",
        "options": [
            "Regressive Tax",
            "Proportional Tax",
            "Progressive Tax",
            "Degressive Tax"
        ],
        "correct": 2,
        "explanation": "A Progressive Tax increases in rate as the taxable amount increases (e.g., Income Tax in India)."
    },
    {
        "id": "eco_31",
        "subject": "economics",
        "topic": "Budget and Taxation",
        "question": "Fiscal Deficit is defined as?",
        "options": [
            "Total Expenditure - Total Revenue Receipts",
            "Total Expenditure - (Revenue Receipts + Non-debt Capital Receipts)",
            "Revenue Expenditure - Revenue Receipts",
            "Fiscal Deficit - Interest Payments"
        ],
        "correct": 1,
        "explanation": "Fiscal Deficit = Total Expenditure - Total Receipts excluding borrowings."
    },
    {
        "id": "eco_32",
        "subject": "economics",
        "topic": "Inflation and Unemployment",
        "question": "A situation where inflation is high, economic growth is slow, and unemployment is high is called?",
        "options": [
            "Deflation",
            "Disinflation",
            "Stagflation",
            "Hyperinflation"
        ],
        "correct": 2,
        "explanation": "Stagflation is the combination of stagnation (low growth, high unemployment) and inflation."
    },
    {
        "id": "eco_33",
        "subject": "economics",
        "topic": "Inflation and Unemployment",
        "question": "Unemployment occurring due to a mismatch of skills in the labor market is called?",
        "options": [
            "Frictional Unemployment",
            "Cyclical Unemployment",
            "Structural Unemployment",
            "Disguised Unemployment"
        ],
        "correct": 2,
        "explanation": "Structural unemployment occurs when there is a mismatch between workers' skills and jobs available."
    },
    {
        "id": "eco_34",
        "subject": "economics",
        "topic": "Inflation and Unemployment",
        "question": "Which type of unemployment is most common in the Indian agricultural sector?",
        "options": [
            "Cyclical Unemployment",
            "Frictional Unemployment",
            "Disguised Unemployment",
            "Educated Unemployment"
        ],
        "correct": 2,
        "explanation": "Disguised unemployment occurs when more people are employed in a job (like farming) than actually needed. Their marginal productivity is zero."
    },
    {
        "id": "eco_35",
        "subject": "economics",
        "topic": "Inflation and Unemployment",
        "question": "Inflation is measured in India primarily using?",
        "options": [
            "GDP Deflator",
            "Wholesale Price Index (WPI)",
            "Consumer Price Index (CPI)",
            "Producer Price Index (PPI)"
        ],
        "correct": 2,
        "explanation": "The RBI uses the Consumer Price Index (CPI) - Combined as the primary measure of inflation."
    },
    {
        "id": "eco_36",
        "subject": "economics",
        "topic": "Inflation and Unemployment",
        "question": "Phillips Curve shows the relationship between?",
        "options": [
            "Inflation and Unemployment",
            "Economic Growth and Inequality",
            "Tax Rates and Tax Revenue",
            "Money Supply and Interest Rates"
        ],
        "correct": 0,
        "explanation": "The Phillips curve shows an inverse relationship between inflation and unemployment in the short run."
    },
    {
        "id": "eco_37",
        "subject": "economics",
        "topic": "Inflation and Unemployment",
        "question": "The temporary unemployment during the transition from one job to another is called?",
        "options": [
            "Structural Unemployment",
            "Frictional Unemployment",
            "Seasonal Unemployment",
            "Cyclical Unemployment"
        ],
        "correct": 1,
        "explanation": "Frictional unemployment is temporary, happening when people are between jobs or looking for their first job."
    },
    {
        "id": "eco_38",
        "subject": "economics",
        "topic": "Inflation and Unemployment",
        "question": "A general decline in prices of goods and services is termed as?",
        "options": [
            "Disinflation",
            "Deflation",
            "Stagflation",
            "Depreciation"
        ],
        "correct": 1,
        "explanation": "Deflation is negative inflation, i.e., a general fall in the price level."
    },
    {
        "id": "eco_39",
        "subject": "economics",
        "topic": "Banking and Monetary Policy",
        "question": "The Reserve Bank of India (RBI) was established on?",
        "options": [
            "April 1, 1935",
            "August 15, 1947",
            "January 26, 1950",
            "January 1, 1949"
        ],
        "correct": 0,
        "explanation": "The RBI was established on April 1, 1935, under the RBI Act, 1934."
    },
    {
        "id": "eco_40",
        "subject": "economics",
        "topic": "Banking and Monetary Policy",
        "question": "The RBI was nationalized in the year?",
        "options": [
            "1935",
            "1947",
            "1949",
            "1955"
        ],
        "correct": 2,
        "explanation": "The Reserve Bank of India was nationalized on January 1, 1949."
    },
    {
        "id": "eco_41",
        "subject": "economics",
        "topic": "Banking and Monetary Policy",
        "question": "The rate at which RBI lends short-term money to commercial banks is called?",
        "options": [
            "Bank Rate",
            "Repo Rate",
            "Reverse Repo Rate",
            "Marginal Standing Facility Rate"
        ],
        "correct": 1,
        "explanation": "Repo Rate is the rate at which the central bank lends money to commercial banks in the event of any shortfall of funds."
    },
    {
        "id": "eco_42",
        "subject": "economics",
        "topic": "Banking and Monetary Policy",
        "question": "The percentage of total deposits that a bank must keep as cash with the RBI is called?",
        "options": [
            "Statutory Liquidity Ratio (SLR)",
            "Cash Reserve Ratio (CRR)",
            "Repo Rate",
            "Bank Rate"
        ],
        "correct": 1,
        "explanation": "CRR is the minimum fraction of the total deposits of customers that commercial banks have to hold as reserves with the central bank."
    },
    {
        "id": "eco_43",
        "subject": "economics",
        "topic": "Banking and Monetary Policy",
        "question": "In India, who issues one-rupee coins and notes?",
        "options": [
            "Reserve Bank of India",
            "State Bank of India",
            "Ministry of Finance",
            "President of India"
        ],
        "correct": 2,
        "explanation": "One-rupee notes and coins are issued by the Ministry of Finance and bear the signature of the Finance Secretary."
    },
    {
        "id": "eco_44",
        "subject": "economics",
        "topic": "Banking and Monetary Policy",
        "question": "The Imperial Bank of India was renamed as what in 1955?",
        "options": [
            "Reserve Bank of India",
            "State Bank of India",
            "Punjab National Bank",
            "Bank of India"
        ],
        "correct": 1,
        "explanation": "The Imperial Bank of India was nationalized and renamed as the State Bank of India (SBI) in 1955."
    },
    {
        "id": "eco_45",
        "subject": "economics",
        "topic": "Banking and Monetary Policy",
        "question": "To control inflation, the RBI usually?",
        "options": [
            "Decreases Repo Rate",
            "Increases Repo Rate",
            "Buys Government Securities",
            "Decreases CRR"
        ],
        "correct": 1,
        "explanation": "Increasing the Repo Rate makes borrowing expensive, reducing money supply and controlling inflation."
    },
    {
        "id": "eco_46",
        "subject": "economics",
        "topic": "Banking and Monetary Policy",
        "question": "NABARD was established in which year?",
        "options": [
            "1980",
            "1982",
            "1988",
            "1992"
        ],
        "correct": 1,
        "explanation": "National Bank for Agriculture and Rural Development (NABARD) was established on July 12, 1982 (B. Sivaraman Committee)."
    },
    {
        "id": "eco_47",
        "subject": "economics",
        "topic": "Banking and Monetary Policy",
        "question": "Which commission recommended the establishment of the RBI?",
        "options": [
            "Simon Commission",
            "Hunter Commission",
            "Hilton Young Commission",
            "Cabinet Mission"
        ],
        "correct": 2,
        "explanation": "The RBI was set up on the recommendations of the Hilton Young Commission (Royal Commission on Indian Currency and Finance)."
    },
    {
        "id": "eco_48",
        "subject": "economics",
        "topic": "Planning and NITI Aayog",
        "question": "The First Five Year Plan of India was based on which model?",
        "options": [
            "Mahalanobis Model",
            "Harrod-Domar Model",
            "Gadgil Strategy",
            "Rostow's Model"
        ],
        "correct": 1,
        "explanation": "The 1st Five Year Plan (1951-56) was based on the Harrod-Domar model and focused on agriculture."
    },
    {
        "id": "eco_49",
        "subject": "economics",
        "topic": "Planning and NITI Aayog",
        "question": "Which Five Year Plan focused on heavy industries and was based on the Mahalanobis model?",
        "options": [
            "First Plan",
            "Second Plan",
            "Third Plan",
            "Fourth Plan"
        ],
        "correct": 1,
        "explanation": "The 2nd Five Year Plan (1956-61) focused on rapid industrialization and was based on the P.C. Mahalanobis model."
    },
    {
        "id": "eco_50",
        "subject": "economics",
        "topic": "Planning and NITI Aayog",
        "question": "The slogan 'Garibi Hatao' (Removal of Poverty) was coined during which Five Year Plan?",
        "options": [
            "Third Plan",
            "Fourth Plan",
            "Fifth Plan",
            "Sixth Plan"
        ],
        "correct": 2,
        "explanation": "The slogan 'Garibi Hatao' was a key focus of the 5th Five Year Plan (1974-79) under Indira Gandhi."
    },
    {
        "id": "eco_51",
        "subject": "economics",
        "topic": "Planning and NITI Aayog",
        "question": "The Planning Commission of India was replaced by which institution?",
        "options": [
            "Finance Commission",
            "NITI Aayog",
            "National Development Council",
            "Inter-State Council"
        ],
        "correct": 1,
        "explanation": "NITI Aayog (National Institution for Transforming India) replaced the Planning Commission on January 1, 2015."
    },
    {
        "id": "eco_52",
        "subject": "economics",
        "topic": "Planning and NITI Aayog",
        "question": "Who is the ex-officio Chairperson of NITI Aayog?",
        "options": [
            "President of India",
            "Finance Minister",
            "Prime Minister",
            "RBI Governor"
        ],
        "correct": 2,
        "explanation": "The Prime Minister of India serves as the ex-officio Chairperson of NITI Aayog."
    },
    {
        "id": "eco_53",
        "subject": "economics",
        "topic": "Planning and NITI Aayog",
        "question": "The concept of Five Year Plans in India was borrowed from?",
        "options": [
            "USA",
            "UK",
            "USSR",
            "France"
        ],
        "correct": 2,
        "explanation": "India borrowed the concept of centralized planning and Five Year Plans from the USSR (Soviet Union)."
    },
    {
        "id": "eco_54",
        "subject": "economics",
        "topic": "Planning and NITI Aayog",
        "question": "Which Five Year Plan is known as the 'Gadgil Yojana'?",
        "options": [
            "Second Plan",
            "Third Plan",
            "Fourth Plan",
            "Fifth Plan"
        ],
        "correct": 1,
        "explanation": "The 3rd Five Year Plan (1961-66) is sometimes referred to as the Gadgil Yojana, after D.R. Gadgil."
    },
    {
        "id": "eco_55",
        "subject": "economics",
        "topic": "Planning and NITI Aayog",
        "question": "The 'Plan Holiday' in India was observed between?",
        "options": [
            "1966-1969",
            "1978-1980",
            "1990-1992",
            "1962-1965"
        ],
        "correct": 0,
        "explanation": "Due to the failure of the 3rd plan and wars (Indo-China, Indo-Pak), three annual plans were executed between 1966 and 1969, known as the Plan Holiday."
    },
    {
        "id": "eco_56",
        "subject": "economics",
        "topic": "Poverty and Indices",
        "question": "The Tendulkar Committee is related to?",
        "options": [
            "Tax Reforms",
            "Banking Reforms",
            "Estimation of Poverty",
            "Center-State Relations"
        ],
        "correct": 2,
        "explanation": "The Suresh Tendulkar Committee (2009) was constituted to review the methodology for poverty estimation in India."
    },
    {
        "id": "eco_57",
        "subject": "economics",
        "topic": "Poverty and Indices",
        "question": "Lorenz Curve measures what economic parameter?",
        "options": [
            "Inflation",
            "Unemployment",
            "Income Inequality",
            "Poverty Line"
        ],
        "correct": 2,
        "explanation": "The Lorenz Curve is a graphical representation of income inequality or wealth distribution."
    },
    {
        "id": "eco_58",
        "subject": "economics",
        "topic": "Poverty and Indices",
        "question": "The Gini Coefficient is used to measure?",
        "options": [
            "Economic Growth",
            "Income Inequality",
            "Inflation Rate",
            "Poverty Line"
        ],
        "correct": 1,
        "explanation": "The Gini coefficient is derived from the Lorenz curve and is a statistical measure of income inequality (0 = perfect equality, 1 = perfect inequality)."
    },
    {
        "id": "eco_59",
        "subject": "economics",
        "topic": "Poverty and Indices",
        "question": "Which institution releases the Human Development Index (HDI)?",
        "options": [
            "World Bank",
            "International Monetary Fund (IMF)",
            "United Nations Development Programme (UNDP)",
            "World Economic Forum"
        ],
        "correct": 2,
        "explanation": "The UNDP has been publishing the Human Development Report, containing the HDI, since 1990."
    },
    {
        "id": "eco_60",
        "subject": "economics",
        "topic": "Poverty and Indices",
        "question": "Narasimham Committee was associated with?",
        "options": [
            "Tax Reforms",
            "Banking Sector Reforms",
            "Agriculture Reforms",
            "Poverty Estimation"
        ],
        "correct": 1,
        "explanation": "The Narasimham Committees (1991 and 1998) are known for comprehensive Banking Sector Reforms in India."
    }
],
    flashcards: [
    {
        "topic": "Basics of Economy",
        "front": "Father of Economics?",
        "back": "Adam Smith (wrote The Wealth of Nations)"
    },
    {
        "topic": "Basics of Economy",
        "front": "Father of Macroeconomics?",
        "back": "John Maynard Keynes"
    },
    {
        "topic": "Basics of Economy",
        "front": "Economy type of India?",
        "back": "Mixed Economy"
    },
    {
        "topic": "Basics of Economy",
        "front": "Agriculture falls under which sector?",
        "back": "Primary Sector"
    },
    {
        "topic": "Microeconomics",
        "front": "Law of Demand states relationship between price & quantity is?",
        "back": "Inverse"
    },
    {
        "topic": "Microeconomics",
        "front": "Tea & Coffee are what type of goods?",
        "back": "Substitute Goods"
    },
    {
        "topic": "Microeconomics",
        "front": "Car & Petrol are what type of goods?",
        "back": "Complementary Goods"
    },
    {
        "topic": "Microeconomics",
        "front": "Market with a single seller is called?",
        "back": "Monopoly"
    },
    {
        "topic": "Microeconomics",
        "front": "Market with a few large sellers is called?",
        "back": "Oligopoly"
    },
    {
        "topic": "National Income",
        "front": "GDP formula?",
        "back": "C + I + G + (X - M)"
    },
    {
        "topic": "National Income",
        "front": "NDP formula?",
        "back": "GDP - Depreciation"
    },
    {
        "topic": "National Income",
        "front": "What is National Income (NI) exactly?",
        "back": "Net National Product at Factor Cost (NNPfc)"
    },
    {
        "topic": "National Income",
        "front": "First to calculate National Income in India?",
        "back": "Dadabhai Naoroji (1867-68)"
    },
    {
        "topic": "National Income",
        "front": "Which organization calculates India's GDP?",
        "back": "Central Statistics Office (CSO)"
    },
    {
        "topic": "Budget and Taxation",
        "front": "Article dealing with Annual Financial Statement (Budget)?",
        "back": "Article 112"
    },
    {
        "topic": "Budget and Taxation",
        "front": "Income Tax is direct or indirect?",
        "back": "Direct Tax"
    },
    {
        "topic": "Budget and Taxation",
        "front": "GST is direct or indirect?",
        "back": "Indirect Tax"
    },
    {
        "topic": "Budget and Taxation",
        "front": "Which amendment introduced GST?",
        "back": "101st Amendment Act, 2016"
    },
    {
        "topic": "Budget and Taxation",
        "front": "Tax rate increases with income. What type of tax?",
        "back": "Progressive Tax"
    },
    {
        "topic": "Inflation and Unemployment",
        "front": "High inflation + High unemployment + Stagnation = ?",
        "back": "Stagflation"
    },
    {
        "topic": "Inflation and Unemployment",
        "front": "Unemployment common in Indian agriculture (zero marginal productivity)?",
        "back": "Disguised Unemployment"
    },
    {
        "topic": "Inflation and Unemployment",
        "front": "Unemployment due to mismatch of skills?",
        "back": "Structural Unemployment"
    },
    {
        "topic": "Inflation and Unemployment",
        "front": "Curve showing relationship between Inflation and Unemployment?",
        "back": "Phillips Curve"
    },
    {
        "topic": "Banking and Monetary Policy",
        "front": "RBI was established on?",
        "back": "April 1, 1935"
    },
    {
        "topic": "Banking and Monetary Policy",
        "front": "RBI Nationalization year?",
        "back": "1949"
    },
    {
        "topic": "Banking and Monetary Policy",
        "front": "Commission that recommended RBI?",
        "back": "Hilton Young Commission"
    },
    {
        "topic": "Banking and Monetary Policy",
        "front": "Rate at which RBI lends short-term money to banks?",
        "back": "Repo Rate"
    },
    {
        "topic": "Banking and Monetary Policy",
        "front": "Percentage of deposits banks keep as cash with RBI?",
        "back": "Cash Reserve Ratio (CRR)"
    },
    {
        "topic": "Banking and Monetary Policy",
        "front": "Who issues One Rupee notes in India?",
        "back": "Ministry of Finance (Finance Secretary signs)"
    },
    {
        "topic": "Banking and Monetary Policy",
        "front": "Imperial Bank of India was renamed in 1955 to?",
        "back": "State Bank of India (SBI)"
    },
    {
        "topic": "Banking and Monetary Policy",
        "front": "NABARD establishment year?",
        "back": "1982"
    },
    {
        "topic": "Planning and NITI Aayog",
        "front": "First Five Year Plan was based on which model?",
        "back": "Harrod-Domar Model"
    },
    {
        "topic": "Planning and NITI Aayog",
        "front": "Second Five Year Plan was based on which model?",
        "back": "Mahalanobis Model"
    },
    {
        "topic": "Planning and NITI Aayog",
        "front": "Which plan gave the slogan 'Garibi Hatao'?",
        "back": "5th Five Year Plan"
    },
    {
        "topic": "Planning and NITI Aayog",
        "front": "Plan Holiday period?",
        "back": "1966 to 1969"
    },
    {
        "topic": "Planning and NITI Aayog",
        "front": "NITI Aayog replaced Planning Commission on?",
        "back": "January 1, 2015"
    },
    {
        "topic": "Planning and NITI Aayog",
        "front": "Ex-officio Chairman of NITI Aayog?",
        "back": "Prime Minister of India"
    },
    {
        "topic": "Poverty and Indices",
        "front": "Tendulkar Committee is related to?",
        "back": "Poverty Estimation"
    },
    {
        "topic": "Poverty and Indices",
        "front": "Narasimham Committee is related to?",
        "back": "Banking Sector Reforms"
    },
    {
        "topic": "Poverty and Indices",
        "front": "Lorenz Curve measures?",
        "back": "Income Inequality"
    }
]
};
window.fatmanEconomics = economicsData;
