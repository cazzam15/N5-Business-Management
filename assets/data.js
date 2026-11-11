// Nat 5 Business Management — question bank, worksheets, key facts, mock papers and links.
// Written from the Qualifications Scotland National 5 Business Management course specification (v3.0, June 2026, valid from 2026–27) (sqa.org.uk/sqa/47436.html). Built by build/build.py — edit build/business_management.py, not this file.
// Question format: {topic, type:'mcq'|'fillin', q, opts (mcq), ans (index for mcq, text for fillin), explain}
const META={
 "subject": "Business Management",
 "title": "Free Nat 5 Business Management Revision — Scotland",
 "slug": "nat5-business-management",
 "store": "n5bus_v1",
 "legacyStore": null
};
const TOPICS=[
 {
  "id": "understanding",
  "name": "Understanding Business",
  "icon": "🏢",
  "sub": "Role of business · Customer satisfaction · Types of organisation · Objectives · Internal & external factors · Stakeholders"
 },
 {
  "id": "marketing",
  "name": "Management of Marketing",
  "icon": "📣",
  "sub": "Customers & segments · Market research · Product · Price · Place · Promotion · Technology"
 },
 {
  "id": "operations",
  "name": "Management of Operations",
  "icon": "⚙️",
  "sub": "Suppliers · Inventory · Methods of production · Quality · Ethical & environmental · Technology"
 },
 {
  "id": "people",
  "name": "Management of People",
  "icon": "👥",
  "sub": "Recruitment & selection · Contracts · Training · Motivation & retention · Legislation · Technology"
 },
 {
  "id": "finance",
  "name": "Management of Finance",
  "icon": "💷",
  "sub": "Sources of finance · Break-even · Cash budgets · Income statement · Technology"
 }
];
const QUESTIONS=[
{"topic": "understanding", "type": "mcq", "q": "Which of these is a factor of production?", "opts": ["Enterprise", "Customers", "Marketing", "Profit"], "ans": 0, "explain": "The four factors of production are land, labour, capital and enterprise. They are combined to produce goods and services."},
{"topic": "understanding", "type": "mcq", "q": "A fishing company works in which sector of industry?", "opts": ["Third", "Tertiary", "Primary", "Secondary"], "ans": 2, "explain": "Primary = extracting raw materials (farming, fishing, mining). Secondary = manufacturing. Tertiary = providing services."},
{"topic": "understanding", "type": "mcq", "q": "A car factory is in which sector of industry?", "opts": ["Primary", "Secondary", "Tertiary", "Public"], "ans": 1, "explain": "Secondary industry turns raw materials into finished goods."},
{"topic": "understanding", "type": "mcq", "q": "Which sector of the economy contains charities and voluntary organisations?", "opts": ["Public sector", "Third sector", "Private sector", "Tertiary sector"], "ans": 1, "explain": "Private = owned by individuals/shareholders, usually aiming for profit. Public = owned or funded by government. Third = charities, voluntary organisations and social enterprises."},
{"topic": "understanding", "type": "mcq", "q": "Which of these is a PUBLIC sector organisation?", "opts": ["A local council", "A charity shop", "A sole trader hairdresser", "A supermarket chain"], "ans": 0, "explain": "Public sector organisations are funded by government (taxes) to provide services, e.g. councils, the NHS and Police Scotland."},
{"topic": "understanding", "type": "mcq", "q": "What is 'unlimited liability'?", "opts": ["There is no limit on profits", "The business can grow as big as it wants", "The owner can lose their personal possessions to pay the business's debts", "Shareholders lose only what they invested"], "ans": 2, "explain": "Sole traders and ordinary partners have unlimited liability. Shareholders in a limited company have limited liability — they can only lose what they invested."},
{"topic": "understanding", "type": "mcq", "q": "Which is an ADVANTAGE of being a sole trader?", "opts": ["Easy to raise large amounts of finance", "Workload is shared", "The owner keeps all the profit and makes all the decisions", "Limited liability"], "ans": 2, "explain": "Sole traders keep all the profit and have full control, but have unlimited liability, may work long hours, and find it hard to raise finance."},
{"topic": "understanding", "type": "mcq", "q": "Which is an advantage of a partnership compared with a sole trader?", "opts": ["Profits are not shared", "Decisions are made by one person", "More finance and shared skills and workload", "Limited liability for all partners"], "ans": 2, "explain": "Partners bring extra money and skills, but must share profits and may disagree. A partnership agreement sets out the rules."},
{"topic": "understanding", "type": "mcq", "q": "Who controls a private limited company (Ltd)?", "opts": ["The government", "A board of directors, appointed by the shareholders", "One partner", "Its customers"], "ans": 1, "explain": "Shareholders own a private limited company, and a board of directors runs it. Shares cannot be sold to the general public on the stock exchange."},
{"topic": "understanding", "type": "mcq", "q": "What is a social enterprise?", "opts": ["A business that trades to make a profit and reinvests it in a social or environmental purpose", "A business owned by the government", "A company owned by social media users", "A charity that never sells anything"], "ans": 0, "explain": "Social enterprises sell goods or services like a business, but use their profits for a social aim."},
{"topic": "understanding", "type": "mcq", "q": "Which quality is MOST associated with an entrepreneur?", "opts": ["Dislikes new ideas", "Willing to take risks", "Avoids making decisions", "Prefers to follow instructions"], "ans": 1, "explain": "Entrepreneurs are risk-takers, creative, innovative, determined and confident."},
{"topic": "understanding", "type": "mcq", "q": "What is the main purpose of a business plan for a new business?", "opts": ["To help get finance, e.g. a bank loan", "To set staff wages by law", "To recruit shareholders on the stock exchange", "To advertise to customers"], "ans": 0, "explain": "A business plan shows lenders the business has been thought through. It includes the business idea, market research, marketing, operations, staffing and finance (e.g. a cash budget)."},
{"topic": "understanding", "type": "mcq", "q": "Which of these is an EXTERNAL factor?", "opts": ["Out-of-date computers", "Poorly trained staff", "A rise in interest rates", "Lack of finance in the business"], "ans": 2, "explain": "External factors are outside the business's control: political, economic, social, technological, environmental and competitive (PESTEC). Internal factors: finance, human resources, current technology."},
{"topic": "understanding", "type": "mcq", "q": "A new law bans single-use plastic packaging. Which external factor is this?", "opts": ["Technological", "Political", "Competitive", "Social"], "ans": 1, "explain": "New laws and government decisions are political factors (though the reason behind this one is environmental)."},
{"topic": "understanding", "type": "mcq", "q": "Which stakeholder is mainly interested in being paid on time and receiving regular orders?", "opts": ["Employees", "The local community", "Suppliers", "Customers"], "ans": 2, "explain": "Suppliers want regular orders and prompt payment. They can influence a business by changing prices or credit terms, or refusing to supply."},
{"topic": "understanding", "type": "mcq", "q": "How can EMPLOYEES influence a business?", "opts": ["By changing tax rates", "By voting at the AGM", "By going on strike or working less hard", "By refusing it a loan"], "ans": 2, "explain": "Employees want good pay and job security. Industrial action or poor motivation can affect output and quality."},
{"topic": "understanding", "type": "mcq", "q": "Which is a method of maximising customer service?", "opts": ["Training staff to deal with customers and complaints", "Raising prices", "Removing the returns policy", "Cutting opening hours"], "ans": 0, "explain": "Good customer service brings repeat custom, good word of mouth and a better reputation than competitors. Methods include staff training, after-sales service, loyalty schemes and a good complaints procedure."},
{"topic": "marketing", "type": "mcq", "q": "What is market segmentation?", "opts": ["Splitting a business into departments", "Selling to every customer the same way", "Cutting prices for everyone", "Dividing the market into groups of customers with similar characteristics"], "ans": 3, "explain": "Segments can be based on age, gender, income, location, lifestyle, religion or occupation. The group a business aims at is its target market."},
{"topic": "marketing", "type": "mcq", "q": "Which of these is DESK research?", "opts": ["A personal interview", "Looking at sales records and internet reports", "A focus group", "A street survey"], "ans": 1, "explain": "Desk (secondary) research uses information that already exists — sales records, internet, newspapers, government statistics. Field (primary) research collects new information directly."},
{"topic": "marketing", "type": "mcq", "q": "Which is an advantage of FIELD research?", "opts": ["The information is up to date and specific to the business", "It is never biased", "It is already published", "It is always cheap and quick"], "ans": 0, "explain": "Field research is first-hand and relevant, but it can be expensive and time-consuming."},
{"topic": "marketing", "type": "mcq", "q": "What is a focus group?", "opts": ["A questionnaire posted online", "A small group of customers discussing a product in detail", "A list of competitors' prices", "A team of managers"], "ans": 1, "explain": "Focus groups give detailed opinions (why people think something), but are costly and the small group may not represent all customers."},
{"topic": "marketing", "type": "mcq", "q": "What are the four Ps of the marketing mix?", "opts": ["People, process, place, price", "Product, price, place, promotion", "Product, profit, place, packaging", "Profit, price, people, production"], "ans": 1, "explain": "The marketing mix is product, price, place and promotion. Getting them right together helps a business meet customer needs."},
{"topic": "marketing", "type": "mcq", "q": "In which stage of the product life cycle do sales level off at their highest?", "opts": ["Decline", "Introduction", "Growth", "Maturity"], "ans": 3, "explain": "Stages: research and development, introduction, growth, maturity, decline. In maturity, sales peak and competition is strong."},
{"topic": "marketing", "type": "mcq", "q": "In which stage of the product life cycle does the business earn NO sales yet?", "opts": ["Decline", "Maturity", "Research and development", "Introduction"], "ans": 2, "explain": "During R&D the product is being designed and tested, so there are costs but no sales."},
{"topic": "marketing", "type": "mcq", "q": "Which is an advantage of a strong brand?", "opts": ["It means no promotion is needed", "Customers recognise it and may pay a higher price", "It guarantees the product never declines", "It makes the product cheaper to produce"], "ans": 1, "explain": "Branding builds recognition and loyalty, which can allow higher prices. But a bad news story can damage the whole brand."},
{"topic": "marketing", "type": "mcq", "q": "Which is a factor to consider when setting a price?", "opts": ["Competitors' prices", "The number of shareholders", "The colour of the packaging", "The staff training budget"], "ans": 0, "explain": "Factors include the cost of making the product, competitors' prices, the target market, demand, and the image of the product."},
{"topic": "marketing", "type": "mcq", "q": "Which is a factor to consider when choosing a business LOCATION?", "opts": ["The owner's favourite colour", "The type of selection test", "The product life cycle", "Being close to customers"], "ans": 3, "explain": "Location factors include customers, competitors, cost of premises, transport links, availability of staff and government grants."},
{"topic": "marketing", "type": "mcq", "q": "Which of these is a sales promotion?", "opts": ["A TV advert", "A newspaper article", "Buy one, get one free", "A billboard"], "ans": 2, "explain": "Sales promotions encourage people to buy now: BOGOF, free samples, loyalty cards, competitions, discounts. Advertising (TV, radio, social media, billboards) gives information and persuades."},
{"topic": "marketing", "type": "mcq", "q": "Which is an example of ETHICAL marketing?", "opts": ["Hiding extra charges", "Advertising that is honest and doesn't target vulnerable people", "Aiming junk food adverts at young children", "Exaggerating what a product can do"], "ans": 1, "explain": "Ethical marketing is truthful and responsible. In the UK, the Advertising Standards Authority deals with misleading adverts."},
{"topic": "marketing", "type": "mcq", "q": "How can technology help a business manage marketing?", "opts": ["It guarantees sales", "It removes the need for a marketing mix", "Social media lets it advertise cheaply to a target market and get feedback", "It replaces the product life cycle"], "ans": 2, "explain": "Websites, social media, online surveys, email and e-commerce help businesses research, promote and sell to customers."},
{"topic": "marketing", "type": "mcq", "q": "Which distribution method suits small, valuable goods that must arrive quickly?", "opts": ["Canal", "Sea", "Air", "Rail"], "ans": 2, "explain": "Air is fast but expensive. Road is flexible (door to door). Rail suits bulky goods over long distances. Sea is cheap for large loads but slow."},
{"topic": "operations", "type": "mcq", "q": "Which is a factor to consider when choosing a supplier?", "opts": ["The supplier's favourite product", "The supplier's number of shareholders", "The colour of the supplier's logo", "Reliability of delivery"], "ans": 3, "explain": "Factors include price, quality, reliability, delivery time (lead time), location and payment terms."},
{"topic": "operations", "type": "mcq", "q": "Which is a problem caused by OVERSTOCKING?", "opts": ["Production stops", "Orders are lost to competitors", "Customers can't buy the product", "Money is tied up in stock and storage costs rise"], "ans": 3, "explain": "Overstocking: cash tied up, storage costs, waste (e.g. food going out of date), risk of theft. Understocking: running out, production stopping, losing customers."},
{"topic": "operations", "type": "mcq", "q": "Which is a problem caused by UNDERSTOCKING?", "opts": ["Storage costs increase", "Stock goes out of date", "More cash is tied up in stock", "Customers may go to competitors if items are out of stock"], "ans": 3, "explain": "If a business runs out, it can lose sales and its reputation."},
{"topic": "operations", "type": "mcq", "q": "A baker makes one wedding cake designed to a couple's exact wishes. This is…", "opts": ["Flow production", "Batch production", "Mass marketing", "Job production"], "ans": 3, "explain": "Job production = one-off products made to a customer's specification. High quality and unique, but slow and expensive."},
{"topic": "operations", "type": "mcq", "q": "A bakery makes 200 white loaves, then switches to 200 brown loaves. This is…", "opts": ["Batch production", "Flow production", "Job production", "Quality assurance"], "ans": 0, "explain": "Batch production makes groups of identical products. Some variety is possible, but machines may stand idle while changing between batches."},
{"topic": "operations", "type": "mcq", "q": "Cars moving along a continuous assembly line is an example of…", "opts": ["Desk research", "Job production", "Flow production", "Batch production"], "ans": 2, "explain": "Flow production makes large quantities continuously, often with machines and robots. Unit costs are low, but there's little variety and the set-up cost is high."},
{"topic": "operations", "type": "mcq", "q": "What is QUALITY CONTROL?", "opts": ["Checking products at the end of production for faults", "Asking customers for reviews", "Checking at every stage to prevent faults", "Buying the best raw materials"], "ans": 0, "explain": "Quality control finds faults at the end, so faulty products may be wasted. Quality assurance checks throughout production to prevent faults."},
{"topic": "operations", "type": "mcq", "q": "What is QUALITY ASSURANCE?", "opts": ["A guarantee given to customers", "Checking at each stage of production so faults are prevented", "A type of insurance", "Checking only the finished product"], "ans": 1, "explain": "Quality assurance reduces waste because problems are found early."},
{"topic": "operations", "type": "mcq", "q": "Which of these is a QUALITY INPUT?", "opts": ["Well-trained staff", "A customer complaint", "A product recall", "A long lead time"], "ans": 0, "explain": "Quality inputs include good raw materials, well-trained staff, and modern, well-maintained machinery."},
{"topic": "operations", "type": "mcq", "q": "Which is an example of producing in an environmentally friendly way?", "opts": ["Running machines all night when not needed", "Dumping waste", "Reducing packaging and recycling waste", "Using more plastic packaging"], "ans": 2, "explain": "Other examples: using renewable energy and cutting transport emissions. It can attract customers and cut costs, but may be expensive to set up."},
{"topic": "operations", "type": "mcq", "q": "Buying Fairtrade raw materials is an example of…", "opts": ["Batch production", "Ethical production", "Desk research", "Quality control"], "ans": 1, "explain": "Ethical production means fair treatment of suppliers and workers, e.g. Fairtrade, no child labour, safe working conditions."},
{"topic": "operations", "type": "mcq", "q": "Which technology helps manage stock automatically?", "opts": ["A partnership agreement", "Barcodes scanned at the till (EPOS) linked to the stock system", "A focus group", "Flexitime"], "ans": 1, "explain": "EPOS systems update stock levels with every sale and can re-order automatically. Robots and CAD/CAM are other operations technology."},
{"topic": "people", "type": "mcq", "q": "What is a JOB DESCRIPTION?", "opts": ["A document listing the tasks and duties of the job", "A list of the qualities the ideal candidate should have", "A legal contract", "A job advert in a newspaper"], "ans": 0, "explain": "The job description describes the job (title, duties, hours). The person specification describes the ideal person (qualifications, skills, experience)."},
{"topic": "people", "type": "mcq", "q": "What is a PERSON SPECIFICATION?", "opts": ["A list of the skills, qualifications and qualities needed for the job", "The tasks involved in the job", "The pay and holiday details", "A training plan"], "ans": 0, "explain": "It often splits criteria into 'essential' and 'desirable'."},
{"topic": "people", "type": "mcq", "q": "Which is an advantage of INTERNAL recruitment?", "opts": ["The candidate already knows the business, so needs less induction", "It brings in new ideas", "It fills two vacancies at once", "It gives a wider choice of candidates"], "ans": 0, "explain": "Internal recruitment is cheaper and quicker, and motivates staff, but limits new ideas and leaves another vacancy to fill."},
{"topic": "people", "type": "mcq", "q": "Which is a method of EXTERNAL recruitment?", "opts": ["The company intranet", "A staff noticeboard", "Advertising on a job website", "An internal email"], "ans": 2, "explain": "External methods: job websites, newspapers, recruitment agencies, job centres, social media."},
{"topic": "people", "type": "mcq", "q": "Which selection method checks a candidate's ability to do the job?", "opts": ["An application form", "A reference", "A contract of employment", "An aptitude test"], "ans": 3, "explain": "Selection methods include application forms/CVs, interviews, tests (aptitude, psychometric, attainment, medical) and references."},
{"topic": "people", "type": "mcq", "q": "Why do businesses ask for references?", "opts": ["To check what a previous employer or teacher says about the candidate", "To advertise the vacancy", "To train new staff", "To set the candidate's wages"], "ans": 0, "explain": "References confirm details such as reliability and attendance."},
{"topic": "people", "type": "mcq", "q": "Which of these would be found in a contract of employment?", "opts": ["The company's sales figures", "Hours of work, pay and holiday entitlement", "Customer complaints", "The product life cycle"], "ans": 1, "explain": "A contract includes job title, start date, pay, hours, holidays, place of work and notice period."},
{"topic": "people", "type": "mcq", "q": "What is INDUCTION training?", "opts": ["Training for new staff to introduce them to the business", "Training at a college away from work", "Training only for managers", "A test given at interview"], "ans": 0, "explain": "Induction covers health and safety, the layout of the workplace, rules and colleagues."},
{"topic": "people", "type": "mcq", "q": "What is OFF-THE-JOB training?", "opts": ["Training by watching an experienced colleague at work", "Induction training", "A selection test", "Training away from the workplace, e.g. at college"], "ans": 3, "explain": "Off-the-job training can be by experts and avoids disrupting work, but costs more and the employee is away from work. On-the-job training is cheaper and relevant."},
{"topic": "people", "type": "mcq", "q": "Which is a COST of training staff?", "opts": ["Lost production while staff are being trained", "More motivated staff", "Fewer accidents", "Higher quality work"], "ans": 0, "explain": "Costs: course fees, lost output, trained staff may leave. Benefits: skilled and flexible staff, better quality, higher motivation."},
{"topic": "people", "type": "mcq", "q": "A worker is paid for every item they make. This payment system is…", "opts": ["Piece rate", "Time rate", "Salary", "Flexitime"], "ans": 0, "explain": "Piece rate encourages speed but quality may fall. Time rate pays per hour. Salary is a fixed annual amount paid monthly."},
{"topic": "people", "type": "mcq", "q": "What is FLEXITIME?", "opts": ["Staff choose their start and finish times around core hours", "Working only weekends", "Two people sharing one job", "Working from home"], "ans": 0, "explain": "Flexible working practices (flexitime, job share, part-time, home working) can motivate and retain staff."},
{"topic": "people", "type": "mcq", "q": "Which is a type of industrial action?", "opts": ["A job share", "Induction", "Piece rate", "A work-to-rule"], "ans": 3, "explain": "Industrial action includes strikes, work-to-rule, overtime bans and go-slows. It can reduce output and damage the business's reputation."},
{"topic": "people", "type": "mcq", "q": "Which law protects workers from discrimination because of age, disability, race, religion or sex?", "opts": ["The Equality Act 2010", "The Data Protection Act", "The Consumer Rights Act", "The Health and Safety at Work Act 1974"], "ans": 0, "explain": "The Equality Act 2010 protects people from discrimination because of 'protected characteristics'."},
{"topic": "people", "type": "mcq", "q": "Under the Health and Safety at Work Act 1974, what must employers do?", "opts": ["Allow flexitime", "Give every worker a pension", "Pay the minimum wage", "Provide a safe working environment, safety equipment and training"], "ans": 3, "explain": "Employees must also take reasonable care of themselves and others. Breaking the law can mean fines and bad publicity."},
{"topic": "people", "type": "mcq", "q": "How can technology help manage people?", "opts": ["It guarantees motivation", "It makes contracts unnecessary", "It removes the need to recruit", "Video conferencing lets staff meet without travelling"], "ans": 3, "explain": "Email, video conferencing, online applications and HR databases save time and money."},
{"topic": "finance", "type": "mcq", "q": "Which source of finance does NOT have to be repaid?", "opts": ["A mortgage", "A government grant", "An overdraft", "A bank loan"], "ans": 1, "explain": "Grants don't have to be repaid but there may be conditions. Loans and overdrafts must be repaid with interest."},
{"topic": "finance", "type": "mcq", "q": "Which source of finance is best for SHORT-TERM cash problems?", "opts": ["A bank overdraft", "A long-term loan", "Selling shares", "A mortgage"], "ans": 0, "explain": "An overdraft is flexible and quick to arrange, but has high interest and can be withdrawn by the bank."},
{"topic": "finance", "type": "mcq", "q": "How can a private limited company raise finance that a sole trader cannot?", "opts": ["By selling shares to new shareholders", "By using the owner's savings", "By using an overdraft", "By taking out a bank loan"], "ans": 0, "explain": "Selling shares raises money that doesn't have to be repaid, but control and future profits (dividends) are shared."},
{"topic": "finance", "type": "mcq", "q": "Which is a source of finance for a charity?", "opts": ["Partners' capital", "Council tax", "Donations and fundraising", "Selling shares on the stock exchange"], "ans": 2, "explain": "Charities rely on donations, fundraising events, grants and charity shop sales."},
{"topic": "finance", "type": "mcq", "q": "Rent is an example of a…", "opts": ["Sales revenue", "Fixed cost", "Gross profit", "Variable cost"], "ans": 1, "explain": "Fixed costs don't change with output (rent, salaries, insurance). Variable costs change with output (raw materials, packaging)."},
{"topic": "finance", "type": "mcq", "q": "Raw materials are an example of a…", "opts": ["Overhead that never changes", "Fixed cost", "Source of finance", "Variable cost"], "ans": 3, "explain": "The more you produce, the more raw materials you need, so total variable cost rises with output."},
{"topic": "finance", "type": "mcq", "q": "Fixed costs are £2000. Each item sells for £15 and costs £7 to make. What is the break-even point?", "opts": ["100 units", "250 units", "133 units", "286 units"], "ans": 1, "explain": "Each unit contributes £15 − £7 = £8 towards fixed costs. Break-even = 2000 ÷ 8 = 250 units. At 250 units, total revenue = total costs, so there's no profit or loss."},
{"topic": "finance", "type": "mcq", "q": "What is the break-even point?", "opts": ["When variable costs are zero", "When the business closes", "The point of maximum profit", "The output where total revenue equals total costs"], "ans": 3, "explain": "Below break-even the business makes a loss; above it, a profit."},
{"topic": "finance", "type": "mcq", "q": "Total revenue is £18 000 and total costs are £15 500. What is the profit?", "opts": ["£2500", "£33 500", "£15 500", "£3500"], "ans": 0, "explain": "Profit = total revenue − total costs = 18 000 − 15 500 = £2500."},
{"topic": "finance", "type": "mcq", "q": "In a cash budget, how is the closing balance calculated?", "opts": ["Opening balance − cash in", "Opening balance + cash in − cash out", "Cash out − cash in", "Cash in − opening balance"], "ans": 1, "explain": "The closing balance of one month becomes the opening balance of the next month."},
{"topic": "finance", "type": "mcq", "q": "Which is a CAUSE of cash-flow problems?", "opts": ["Customers taking a long time to pay", "Getting an overdraft", "Selling unused equipment", "Paying suppliers late"], "ans": 0, "explain": "Causes: slow-paying customers, too much stock, owner taking out too much (drawings), unexpected bills, falling sales."},
{"topic": "finance", "type": "mcq", "q": "Which is a SOLUTION to a cash-flow problem?", "opts": ["Buy more stock than needed", "Offer discounts to customers who pay quickly", "Give customers longer to pay", "Pay suppliers early"], "ans": 1, "explain": "Solutions: arrange an overdraft or loan, delay payments to suppliers, chase debtors, sell unused assets, cut costs."},
{"topic": "finance", "type": "mcq", "q": "Sales revenue is £60 000 and cost of sales is £35 000. What is the gross profit?", "opts": ["£60 000", "£35 000", "£25 000", "£95 000"], "ans": 2, "explain": "Gross profit = sales revenue − cost of sales = 60 000 − 35 000 = £25 000."},
{"topic": "finance", "type": "mcq", "q": "Gross profit is £25 000 and expenses are £18 000. What is the profit for the year?", "opts": ["£43 000", "£25 000", "£18 000", "£7000"], "ans": 3, "explain": "Profit for the year = gross profit − expenses = 25 000 − 18 000 = £7000."},
{"topic": "finance", "type": "mcq", "q": "Opening inventory £4000, purchases £21 000, closing inventory £5000. What is the cost of sales?", "opts": ["£20 000", "£30 000", "£22 000", "£21 000"], "ans": 0, "explain": "Cost of sales = opening inventory + purchases − closing inventory = 4000 + 21 000 − 5000 = £20 000."},
{"topic": "finance", "type": "mcq", "q": "How can a spreadsheet help manage finance?", "opts": ["It sends invoices by post", "It replaces the need for an income statement", "It stops a business making a loss", "Formulae recalculate figures automatically when data changes"], "ans": 3, "explain": "Spreadsheets and accounting software make calculations quick and accurate and can produce graphs. Online banking lets managers check balances any time."},
{"topic": "understanding", "type": "fillin", "q": "The four factors of production are land, labour, capital and _____.", "ans": "enterprise", "explain": "Enterprise is the entrepreneur bringing the other factors together and taking the risk."},
{"topic": "understanding", "type": "fillin", "q": "Owners of a limited company are called _____.", "ans": "shareholders", "explain": "Shareholders have limited liability and may receive a share of profits (dividends)."},
{"topic": "marketing", "type": "fillin", "q": "The group of customers a business aims its product at is its _____ market.", "ans": "target", "explain": "Knowing the target market helps decide price, place and promotion."},
{"topic": "marketing", "type": "fillin", "q": "Research that collects new, first-hand information is called _____ research.", "ans": "field", "explain": "Field (primary) research: surveys, focus groups, personal interviews. Desk (secondary) research uses existing information."},
{"topic": "operations", "type": "fillin", "q": "Producing one-off items to a customer's specification is called _____ production.", "ans": "job", "explain": "Job production: unique, high quality, but slow and expensive."},
{"topic": "people", "type": "fillin", "q": "Training given to new staff when they start is called _____ training.", "ans": "induction", "explain": "Induction introduces new staff to the business, its rules and health and safety."},
{"topic": "finance", "type": "fillin", "q": "Costs that do not change when output changes are called _____ costs.", "ans": "fixed", "explain": "Examples: rent, insurance, salaries."},
{"topic": "finance", "type": "fillin", "q": "Sales revenue minus cost of sales gives _____ profit.", "ans": "gross", "explain": "Gross profit − expenses = profit for the year."}
];
const SHEETS=[
 {
  "title": "Finance worksheet",
  "icon": "💷",
  "keyAreas": "<strong>📋 Course content:</strong> Sources of finance · Break-even · Cash budgets · Income statement",
  "sections": [
   {
    "head": "Section A — Calculate",
    "qs": [
     {
      "kind": "blanks",
      "label": "Q1 · Income statement",
      "text": "Sales revenue £80 000, cost of sales £46 000, expenses £21 000.",
      "reveal": "<strong>✓</strong> Gross profit = <strong>34000</strong> · Profit for the year = <strong>13000</strong>",
      "body": "Gross profit = £<input class=\"eq-in\" id=\"bq1a\" placeholder=\"?\"/> · Profit for the year = £<input class=\"eq-in\" id=\"bq1b\" placeholder=\"?\"/>",
      "ids": [
       "bq1a",
       "bq1b"
      ],
      "answers": [
       "34000",
       "13000"
      ]
     },
     {
      "kind": "written",
      "label": "Q2 · Break-even (2 marks)",
      "text": "Fixed costs are £4500. Selling price is £25 per unit and variable cost is £16 per unit. Calculate the break-even point in units.",
      "reveal": "<strong>✓</strong> Contribution per unit = 25 − 16 = £9 (1). Break-even = 4500 ÷ 9 = <strong>500 units</strong> (1).",
      "placeholder": "Show your working…",
      "tall": false
     }
    ]
   },
   {
    "head": "Section B — Explain",
    "qs": [
     {
      "kind": "written",
      "label": "Q3 · Cash flow (4 marks)",
      "text": "Describe two causes of cash-flow problems and two solutions.",
      "reveal": "<strong>✓ Causes:</strong> customers slow to pay · too much money tied up in stock · owner's drawings too high · unexpected costs.<br/><strong>Solutions:</strong> arrange an overdraft · delay paying suppliers · offer discounts for prompt payment · sell unused assets.",
      "placeholder": "",
      "tall": true
     }
    ]
   }
  ]
 },
 {
  "title": "Marketing worksheet",
  "icon": "📣",
  "keyAreas": "<strong>📋 Course content:</strong> Segments · Market research · Product · Price · Place · Promotion",
  "sections": [
   {
    "head": "Section A — Knowledge",
    "qs": [
     {
      "kind": "mcq",
      "label": "Q1 · Multiple Choice",
      "text": "Sales of a smartphone model are falling as newer models come out. Which stage is it in?",
      "reveal": "<strong>✓ Decline.</strong> Sales fall as customers switch to newer products.",
      "opts": [
       [
        "Decline",
        true
       ],
       [
        "Growth",
        false
       ],
       [
        "Introduction",
        false
       ],
       [
        "Research and development",
        false
       ]
      ]
     },
     {
      "kind": "written",
      "label": "Q2 · Compare (2 marks)",
      "text": "Compare desk research with field research.",
      "reveal": "<strong>✓ Model answer:</strong><br/>• Desk research uses information that already exists, whereas field research collects new, first-hand information. (1)<br/>• Desk research is usually cheaper and quicker, whereas field research is more up to date and specific to the business. (1)",
      "placeholder": "Use 'whereas' to link the two…",
      "tall": false
     }
    ]
   },
   {
    "head": "Section B — Apply",
    "qs": [
     {
      "kind": "written",
      "label": "Q3 · Explain (3 marks)",
      "text": "A new café is opening near a secondary school. Explain three factors it should consider when setting its prices.",
      "reveal": "<strong>✓ Possible answers:</strong><br/>• Costs — price must cover the cost of food and wages, or it will make a loss.<br/>• Competitors — nearby cafés and shops; if it charges much more, pupils may go elsewhere.<br/>• Target market — pupils have limited money, so prices need to be affordable.",
      "placeholder": "",
      "tall": true
     }
    ]
   }
  ]
 },
 {
  "title": "People & operations worksheet",
  "icon": "👥",
  "keyAreas": "<strong>📋 Course content:</strong> Recruitment &amp; selection · Training · Methods of production · Quality",
  "sections": [
   {
    "head": "Section A — Knowledge",
    "qs": [
     {
      "kind": "blanks",
      "label": "Q1 · Fill in the Blanks",
      "text": "Complete the production methods:",
      "reveal": "<strong>✓</strong> One-off = <strong>job</strong> · Groups of identical items = <strong>batch</strong> · Continuous = <strong>flow</strong>",
      "body": "One-off = <input class=\"eq-in\" id=\"bq7a\" placeholder=\"?\"/> · Groups of identical items = <input class=\"eq-in\" id=\"bq7b\" placeholder=\"?\"/> · Continuous = <input class=\"eq-in\" id=\"bq7c\" placeholder=\"?\"/>",
      "ids": [
       "bq7a",
       "bq7b",
       "bq7c"
      ],
      "answers": [
       "job",
       "batch",
       "flow"
      ]
     },
     {
      "kind": "written",
      "label": "Q2 · Describe (3 marks)",
      "text": "Describe three methods a business can use to select the best candidate.",
      "reveal": "<strong>✓ Possible answers:</strong> application form/CV to shortlist · interview to assess personality and communication · tests (aptitude, psychometric, attainment) · references from a previous employer.",
      "placeholder": "",
      "tall": false
     }
    ]
   },
   {
    "head": "Section B — Discuss",
    "qs": [
     {
      "kind": "written",
      "label": "Q3 · Discuss (4 marks)",
      "text": "Discuss the advantages and disadvantages of flow production.",
      "reveal": "<strong>✓ Advantages:</strong> large quantities made quickly · low cost per unit · can run 24/7 with machines · consistent quality.<br/><strong>Disadvantages:</strong> expensive to set up · little variety · a breakdown stops the whole line · repetitive work can demotivate staff.",
      "placeholder": "Give both sides…",
      "tall": true
     }
    ]
   }
  ]
 }
];
const FACTS=[
 {
  "h": "🏢 Understanding business",
  "cards": [
   [
    "Sectors of industry",
    "Primary (raw materials) · Secondary (manufacturing) · Tertiary (services)"
   ],
   [
    "Sectors of the economy",
    "Private (profit) · Public (government) · Third (charities, voluntary, social enterprises)"
   ],
   [
    "External factors — PESTEC",
    "Political · Economic · Social · Technological · Environmental · Competitive"
   ],
   [
    "Internal factors",
    "Finance · Human resources · Current technology"
   ],
   [
    "Liability",
    "Unlimited = personal possessions at risk (sole trader, partnership) · Limited = only what's invested (Ltd)"
   ]
  ]
 },
 {
  "h": "📣 Marketing",
  "cards": [
   [
    "Marketing mix",
    "Product · Price · Place · Promotion"
   ],
   [
    "Product life cycle",
    "R&D → Introduction → Growth → Maturity → Decline"
   ],
   [
    "Market research",
    "Desk (existing info) · Field (new info: surveys, focus groups, interviews)"
   ]
  ]
 },
 {
  "h": "⚙️ Operations",
  "cards": [
   [
    "Production methods",
    "Job (one-off) · Batch (groups) · Flow (continuous)"
   ],
   [
    "Quality",
    "Control (check at end) · Assurance (check every stage) · Inputs (materials, staff, machinery)"
   ],
   [
    "Stock",
    "Over: cash tied up, storage, waste · Under: run out, lost sales"
   ]
  ]
 },
 {
  "h": "👥 People",
  "cards": [
   [
    "Recruitment",
    "Identify vacancy → job analysis → job description → person specification → advertise"
   ],
   [
    "Selection",
    "Application form/CV · Interview · Tests · References"
   ],
   [
    "Legislation",
    "Equality Act 2010 · Health and Safety at Work Act 1974"
   ]
  ]
 },
 {
  "h": "💷 Finance",
  "cards": [
   [
    "Break-even (units)",
    "Fixed costs ÷ (selling price − variable cost per unit)"
   ],
   [
    "Profit",
    "Total revenue − total costs"
   ],
   [
    "Income statement",
    "Sales revenue − cost of sales = gross profit<br/>Gross profit − expenses = profit for the year"
   ],
   [
    "Cost of sales",
    "Opening inventory + purchases − closing inventory"
   ],
   [
    "Cash budget",
    "Opening balance + receipts − payments = closing balance"
   ]
  ]
 }
];
const MOCK_INTRO="Two practice sets of 25 questions from the whole bank, 1 mark each, a fresh set every attempt.<br/><strong>The real exam (from 2026–27):</strong> one question paper, 70 marks in 1 hour 30 minutes — Section 1 is one 20-mark question based on a real business, Section 2 has five 10-mark questions, one on each area. There is also a 30-mark assignment (a business report), scaled so the question paper is 78% and the assignment 22% of your award.";
const MOCK_PAPERS=[
 {
  "key": "paper1",
  "title": "Practice set 1 — Mixed questions",
  "short": "Set 1",
  "desc": "25 questions · 30 minutes · all areas",
  "n": 25,
  "mins": 30
 },
 {
  "key": "paper2",
  "title": "Practice set 2 — Mixed questions",
  "short": "Set 2",
  "desc": "25 questions · 40 minutes · all areas",
  "n": 25,
  "mins": 40
 }
];
const MOCK_GRADES=[
 {
  "min": 70,
  "grade": "A",
  "msg": "Outstanding! An A-grade performance."
 },
 {
  "min": 60,
  "grade": "B",
  "msg": "Well done! Review the questions you dropped to push for an A."
 },
 {
  "min": 50,
  "grade": "C",
  "msg": "Good effort! Target your weakest topics to move up."
 },
 {
  "min": 40,
  "grade": "D",
  "msg": "Keep revising — use Smart Mix to work on the topics you found hardest."
 },
 {
  "min": 0,
  "grade": "No Award",
  "msg": "Don't give up! Review your answers, then try again."
 }
];
const EXAM_TIPS=[
 [
  "🔍",
  "<strong>Read the command word</strong> — 'Describe' means say what something is or does. 'Explain' needs a reason or consequence ('…, which means that…'). 'Compare' needs a direct link between two things."
 ],
 [
  "🏢",
  "<strong>Section 1 is based on a real business</strong> — use the case study in your answers where you can, and read the questions before the stimulus."
 ],
 [
  "🔢",
  "<strong>Practise the calculations</strong> — break-even, profit, cash budgets and the income statement come up often. Show your working."
 ],
 [
  "⚖️",
  "<strong>Advantages and disadvantages</strong> — for 'Discuss' questions, give both sides."
 ],
 [
  "📝",
  "<strong>Use business terms</strong> — say 'unlimited liability', 'target market', 'quality assurance', not everyday words."
 ],
 [
  "⏱",
  "<strong>Manage your time</strong> — 70 marks in 90 minutes is about 1¼ minutes a mark: roughly 25 minutes on Section 1 and 13 minutes on each 10-mark question."
 ]
];
const LINKS=[
 [
  "https://www.sqa.org.uk/sqa/47436.html",
  "SQA — Nat 5 Business Management",
  "Official past papers, marking instructions, course spec and 2026–27 changes"
 ],
 [
  "https://www.bbc.co.uk/bitesize/subjects/zd6fcdm",
  "BBC Bitesize — Nat 5 Business Management",
  "Notes and tests for each area"
 ],
 [
  "https://scholar.hw.ac.uk",
  "SCHOLAR (Heriot-Watt)",
  "Online course material used by many Scottish schools"
 ],
 [
  "https://www.understandingstandards.org.uk/Subjects/BusinessManagement",
  "Understanding Standards",
  "SQA exemplar answers and marking guidance"
 ]
];
const ABOUT="Covers all five areas of SQA Nat 5 Business Management: understanding business, and the management of marketing, operations, people and finance.<br/><br/> ✅ Written from the Qualifications Scotland course specification, version 3.0 (June 2026, valid from session 2026–27), which introduced the 70-mark question paper.<br/><br/> 83 practice questions · 3 interactive worksheets (9 questions) · Practice tests · Flashcards · Timed challenge · Key facts reference.<br/><br/> Progress saves automatically in your browser — nothing is sent anywhere. Not affiliated with the SQA.";
