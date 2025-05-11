import "./assets.css";

const Glossariy = () => {
  return (
    <>
      <div className="glossariy">
        <div className="container">
          <div className="glos-inner">
            <h1 className="mt-4 mb-4">Physics Glossary</h1>
            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead className="table-light">
                  <tr>
                    <th>#</th>
                    <th>TERMS</th>
                    <th>ATAMALAR</th>
                    <th>IZOH</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Substance</td>
                    <td>Modda</td>
                    <td>Massaga va hajmga ega bo'lgan har qanday material.</td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>Body</td>
                    <td>Jism</td>
                    <td>Shakl va hajmga ega bo'lgan modda.</td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>Particle</td>
                    <td>Zarracha</td>
                    <td>Juda kichik o‘lchamdagi modda qismi.</td>
                  </tr>
                  <tr>
                    <th>4</th>
                    <td>Matter</td>
                    <td>Materiya</td>
                    <td>Barcha mavjudot asosini tashkil etuvchi moddiy tizim.</td>
                  </tr>
                  <tr>
                    <th>5</th>
                    <td>Motion</td>
                    <td>Harakat</td>
                    <td>Jismning vaqt mobaynida o‘rnini o‘zgartirishi.</td>
                  </tr>
                  <tr>
                    <th>6</th>
                    <td>Force</td>
                    <td>Kuch</td>
                    <td>
                      Jismga ta’sir etuvchi va uning harakat holatini
                      o‘zgartiruvchi omil.
                    </td>
                  </tr>
                  <tr>
                    <th>7</th>
                    <td>Energy</td>
                    <td>Energiyа</td>
                    <td>Ish bajarish qobiliyati.</td>
                  </tr>
                  <tr>
                    <th>8</th>
                    <td>Work</td>
                    <td>Ish</td>
                    <td>
                      Kuch ta’sirida masofa bo'ylab bajarilgan fizik miqdor.
                    </td>
                  </tr>
                  <tr>
                    <th>9</th>
                    <td>Power</td>
                    <td>Quvvat</td>
                    <td>Ish bajarish tezligi.</td>
                  </tr>
                  <tr>
                    <th>10</th>
                    <td>Mass</td>
                    <td>Massa</td>
                    <td>Jismdagi modda miqdorini ifodalovchi fizik kattalik.</td>
                  </tr>
                  <tr>
                    <th>11</th>
                    <td>Volume</td>
                    <td>Hajm</td>
                    <td>Jism egallagan fazo miqdori.</td>
                  </tr>
                  <tr>
                    <th>12</th>
                    <td>Density</td>
                    <td>Zichlik</td>
                    <td>Jismning birlik hajmiga to‘g‘ri keladigan massa.</td>
                  </tr>
                  <tr>
                    <th>13</th>
                    <td>Temperature</td>
                    <td>Harorat</td>
                    <td>
                      Jismning issiqlik darajasini ko‘rsatuvchi fizik kattalik.
                    </td>
                  </tr>
                  <tr>
                    <th>14</th>
                    <td>Pressure</td>
                    <td>Bosim</td>
                    <td>Birlik yuzaga tushuvchi kuch.</td>
                  </tr>
                  <tr>
                    <th>15</th>
                    <td>Heat</td>
                    <td>Issiqlik</td>
                    <td>Energiya shakli, harorat farqi natijasida uzatiladi.</td>
                  </tr>
                  <tr>
                    <th>16</th>
                    <td>Specific heat capacity</td>
                    <td>Issiqlik sig‘imi</td>
                    <td>
                      1 kg moddaning haroratini 1°C ga oshirish uchun kerak
                      bo‘lgan issiqlik miqdori.
                    </td>
                  </tr>
                  <tr>
                    <th>17</th>
                    <td>Thermal conductivity</td>
                    <td>Issiqlik o'tkazuvchanlik</td>
                    <td>Moddaning issiqlikni uzatish qobiliyati.</td>
                  </tr>
                  <tr>
                    <th>18</th>
                    <td>Current</td>
                    <td>Elektr toki</td>
                    <td>Zaryadlarning tartibli harakati.</td>
                  </tr>
                  <tr>
                    <th>19</th>
                    <td>Voltage</td>
                    <td>Kuchlanish</td>
                    <td>Elektr maydonida zaryadga berilgan energiya miqdori.</td>
                  </tr>
                  <tr>
                    <th>20</th>
                    <td>Resistance</td>
                    <td>Qarshilik</td>
                    <td>Elektr toki o‘tishiga qarshilik ko‘rsatuvchi xossa.</td>
                  </tr>
                  <tr>
                    <th>21</th>
                    <td>Ohm's Law</td>
                    <td>Om qonuni</td>
                    <td>
                      Tok kuchi kuchlanishga to‘g‘ri, qarshilikka teskari
                      proporsional.
                    </td>
                  </tr>
                  <tr>
                    <th>22</th>
                    <td>Capacitor</td>
                    <td>Kondensator</td>
                    <td>Elektr energiyasini saqlovchi qurilma.</td>
                  </tr>
                  <tr>
                    <th>23</th>
                    <td>Inductor</td>
                    <td>Induktansiya g'altagi</td>
                    <td>Magnit maydon hosil qiluvchi qurilma.</td>
                  </tr>
                  <tr>
                    <th>24</th>
                    <td>Magnetic field</td>
                    <td>Magnit maydon</td>
                    <td>Magnit kuchlar ta’sirini ifodalovchi maydon.</td>
                  </tr>
                  <tr>
                    <th>25</th>
                    <td>Wave</td>
                    <td>To‘lqin</td>
                    <td>Energiyaning modda orqali tarqalishi shakli.</td>
                  </tr>
                  <tr>
                    <th>26</th>
                    <td>Frequency</td>
                    <td>Chastota</td>
                    <td>To‘lqinning bir sekunddagi tebranish soni.</td>
                  </tr>
                  <tr>
                    <th>27</th>
                    <td>Wavelength</td>
                    <td>To‘lqin uzunligi</td>
                    <td>Bir to‘lqin davrining uzunligi.</td>
                  </tr>
                  <tr>
                    <th>28</th>
                    <td>Refraction</td>
                    <td>Sinish</td>
                    <td>
                      Yorug‘lik nurning boshqa muhitga o‘tganda yo‘nalishini
                      o‘zgartirishi.
                    </td>
                  </tr>
                  <tr>
                    <th>29</th>
                    <td>Reflection</td>
                    <td>Aks ettirish</td>
                    <td>Yorug‘lik nurning sirtga urilib qaytishi.</td>
                  </tr>
                  <tr>
                    <th>30</th>
                    <td>Lens</td>
                    <td>Linza</td>
                    <td>Yorug‘lik nurlarini yo‘naltiruvchi optik asbob.</td>
                  </tr>
                  <tr>
                    <th>31</th>
                    <td>Atomic nucleus</td>
                    <td>Atom yadrosi</td>
                    <td>
                      Atom markazida proton va neytronlardan tashkil topgan soha.
                    </td>
                  </tr>
                  <tr>
                    <th>32</th>
                    <td>Radioactivity</td>
                    <td>Radioaktivlik</td>
                    <td>Atomaning o‘z-o‘zidan nurlanish jarayoni.</td>
                  </tr>
                  <tr>
                    <th>33</th>
                    <td>Half-life</td>
                    <td>Yarim yemirilish vaqti</td>
                    <td>
                      Radioaktiv moddaning yarmi yemirilishi uchun ketadigan vaqt.
                    </td>
                  </tr>
                  <tr>
                    <th>34</th>
                    <td>Quantum</td>
                    <td>Kvant</td>
                    <td>Energiya va zaryadning diskret (bo‘lingan) birligi.</td>
                  </tr>
                  <tr>
                    <th>35</th>
                    <td>Relativity theory</td>
                    <td>Nisbiylik nazariyasi</td>
                    <td>
                      Harakat va tortishishning fizik qonunlarini ifodalovchi
                      nazariya.
                    </td>
                  </tr>
                  <tr>
                    <th>36</th>
                    <td>Thermodynamics</td>
                    <td>Termodinamika</td>
                    <td>
                      Issiqlik va boshqa energiya shakllari o‘zaro ta'siri
                      qonuniyatlarini o‘rganuvchi fan.
                    </td>
                  </tr>
                  <tr>
                    <th>37</th>
                    <td>First law of thermodynamics</td>
                    <td>Termodinamikaning birinchi qonuni</td>
                    <td>Energiya saqlanish qonuni issiqlik va ish orasida.</td>
                  </tr>
                  <tr>
                    <th>38</th>
                    <td>Second law of thermodynamics</td>
                    <td>Termodinamikaning ikkinchi qonuni</td>
                    <td>Entropiya doimo ortadi.</td>
                  </tr>
                  <tr>
                    <th>39</th>
                    <td>Ideal gas</td>
                    <td>Ideal gaz</td>
                    <td>
                      Molekulalari o'zaro ta'sirlashmaydigan va faqat elastik
                      urilish sodir bo'ladigan gaz modeli.
                    </td>
                  </tr>
                  <tr>
                    <th>40</th>
                    <td>Real gas</td>
                    <td>Real gaz</td>
                    <td>
                      Molekulalararo ta'sir kuchlari hisobga olingan haqiqiy gaz.
                    </td>
                  </tr>
                  <tr>
                    <th>41</th>
                    <td>Boyle's Law</td>
                    <td>Boyl qonuni</td>
                    <td>Gaz bosimi hajmga teskari proporsional.</td>
                  </tr>
                  <tr>
                    <th>42</th>
                    <td>Charles's Law</td>
                    <td>Sharl qonuni</td>
                    <td>Gaz hajmi harorat bilan to'g'ri proporsional.</td>
                  </tr>
                  <tr>
                    <th>43</th>
                    <td>Avogadro's Law</td>
                    <td>Avogadro qonuni</td>
                    <td>
                      Teng sharoitda barcha gazlarning bir xil hajmlarida
                      molekulalar soni bir xil.
                    </td>
                  </tr>
                  <tr>
                    <th>44</th>
                    <td>Avogadro number</td>
                    <td>Avogadro soni</td>
                    <td>1 mol moddadagi zarrachalar soni (6.022×10²³).</td>
                  </tr>
                  <tr>
                    <th>45</th>
                    <td>Molar mass</td>
                    <td>Molyar massa</td>
                    <td>1 mol moddaning massasi.</td>
                  </tr>
                  <tr>
                    <th>46</th>
                    <td>Specific volume</td>
                    <td>Xususiy hajm</td>
                    <td>Bir birlik massaga to‘g‘ri keladigan hajm.</td>
                  </tr>
                  <tr>
                    <th>47</th>
                    <td>Entropy</td>
                    <td>Entropiya</td>
                    <td>Tizimdagi tartibsizlik o‘lchovi.</td>
                  </tr>
                  <tr>
                    <th>48</th>
                    <td>Carnot cycle</td>
                    <td>Karnot sikli</td>
                    <td>Issiqlik mashinasining ideal aylanishi.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Glossariy;
