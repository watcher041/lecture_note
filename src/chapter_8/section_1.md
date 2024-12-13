
## 空洞輻射の理論

　空洞輻射の問題とは一口に言えばこうである。

「熱せられた物体は温度ごとにどういう色の光を出すであろうか」

　物体を熱したとき出る光は、温度の低い時には赤い色をしているが、温度が上がるにつれて次第に白い色を呈するようになる。この現象を原子論的に説明するとどういうことになるかという問題である。この問題を物理学的に精密に言い表し、且つ取り扱いやすい形に理想化すると次のようにいってもよい。ある物体が壁で囲まれた室（空洞）の中にあったとする。この物体を熱すると光を発するのだが、その光により壁の温度も変化する。そして、空洞内が熱平衡になり温度 $T$ になり特定の光を生じるようになる。この**光の強度（スペクトル）は温度 $T$ だけに関係し、壁の物質、空洞の形、あるいは大きさによらない**ことがまずKirchhoffによって証明された。

　次にスペクトルがどのように温度に依存するか考察するにあたって、統計力学において一自由度あたり $1/2kT$ のエネルギーが分配されるという法則（エネルギー等分配則）が利用できると思われる。そこで、光が電磁波であり一方向にあたり電場と磁場によるエネルギーを1つずつ有すること、横波で2つの自由度が別に存在することから $2kT(=1/2kT\times 4)$ 分のエネルギーを有すると考えてみる。また、スペクトルが空洞の形によらないことから一辺 $L$ の立方体の部屋を仮定して、この中で電磁波がどのようになるかというと固定端反射をすることから波長は以下のように制限される。

$$
    \lambda=\frac{2L}{n}　(n=1,2,3,\cdots)
$$

三次元の場合だと、振動数において

$$
    \nu^2=\nu_x^2+\nu_y^2+\nu_z^2
$$

というように各成分の二乗和で書けるため、先ほどの波長の式を

$$
    \nu_x=\frac{cn_x}{2L}、
    \nu_y=\frac{cn_y}{2L}、
    \nu_z=\frac{cn_z}{2L}　
    (n_x,n_y,n_z=1,2,3,\cdots)  
$$

としてこれらの式を代入すると以下のようになる。

$$
    \nu^2=
    \left(\frac{c}{2L}\right)^2(n_x^2+n_y^2+n_z^2)
$$

一見すると離散的な値をとっているため一概には計算ができないが、ここで $L\to\infty$ として**振動数が連続していると仮定する**と、振動数 $\nu$ と $\nu+\mathrm{d}\nu$ での自由度は

$$
    \left(\frac{c}{2L}\right)^3
$$

につき1自由度あることから以下のようになる。

$$
    \frac{1}{8}
    \frac{4\pi\nu^2\mathrm{d}\nu}
    {\left(\frac{c}{2L}\right)^3}=
    \frac{4\pi L^3}{c^3}\nu^2\mathrm{d}\nu
$$

スペクトルが空洞の形によらないことを踏まえて、エネルギー密度を求めると以下のようになる。

$$
    u\mathrm{d}\nu=\frac{1}{L^3}\left(
    \frac{4\pi L^3}{c^3}\nu^2\mathrm{d}\nu\times 2kT
    \right)=
    \frac{8\pi kT}{c^3}\nu^2\mathrm{d}\nu
$$

これがRayleigh–Jeansの法則と呼ばれるものとなっている。実はこの式は低周波数でしか成立していないが、これは先ほど $L\to\infty$ としたことで波長、振動数が $\nu\to 0\ (\lambda\to\infty)$ となることからもうかがえる。一方で、高振動数の領域に対してはWienが提唱した以下の式（Wienの輻射式）が成り立つが知られている。

$$
    u=
    \frac{8\pi k\alpha}{c^3}
    e^{-\alpha\nu/T}\nu^3、
    (\alpha：定数)
$$

ここで式の導出過程を述べていないが、これは導出に用いられた仮定が不自然なものであり、なおかつMaxwellの電磁気学を全く無視していて説明するには不適切と判断したためである。

　以上のことを踏まえて、Planckは低振動数でRayleigh–Jeansの法則、高振動数でWienの輻射式が成り立つような内挿式（**Planckの公式**）を導出した。

$$
    u=
    \frac{8\pi k\alpha}{c^3}
    \frac{1}{e^{\alpha\nu/T}-1}\nu^3
$$

ここで、定数に関して $h=k\alpha$（**Planck定数**） に置き換えることで、以下のように $kT$ を含んだ形にまとめることができる。

$$
    u=
    \frac{8\pi h}{c^3}
    \frac{1}{e^{h\nu/kT}-1}\nu^3、
    （h=6.626\times 10^{-34}\ \mathrm{Js}）
$$

この式において、$h\nu << kT（\nu\to 0）$とすると

$$
    u\simeq
    \frac{8\pi h}{c^3}
    \frac{1}{(1+h\nu/kT)-1}\nu^3=
    \frac{8\pi kT}{c^3}\nu^2
$$

というようになり、反対に $h\nu >> kT（\nu\to\infty）$ では $e^{h\nu/kT}>>1$ であるため

$$
    u\simeq
    \frac{8\pi h}{c^3}
    \frac{1}{e^{h\nu/kT}}\nu^3=
    \frac{8\pi h}{c^3}
    e^{-h\nu/kT}\nu^3
$$

と先ほどと同様な式が得られることが分かる。ここで、この式の意味を考えるため、

$$
    u=
    \frac{8\pi\nu^2}{c^3}
    \frac{h\nu}{e^{h\nu/kT}-1}
$$

とすると、$kT$ の代わりに別の形になっていることが分かる。この部分というのは、電磁波のハミルトニアンが振動体の形で書けることから自由度 $f$ に対して

$$
    \mathcal{H}=
    \sum_{i=1}^{f}
    \left(
        aq_i^2+bp_i^2
    \right)
$$

となり、この分の分配関数と期待値が

$$
    Z=
    \frac{1}{f!h^{f}}
    \int\cdots\int
    e^{-\beta \mathcal{H}}
    \mathrm{d}q_1\cdots\mathrm{d}q_f
    \mathrm{d}p_1\cdots\mathrm{d}p_f=
    \frac{1}{f!}
    \left(
        \frac{\pi}{h\beta\sqrt{ab}}
    \right)^{f}
$$
$$
    \braket{\mathcal{H}}=
    -\frac{\partial}{\partial\beta}
    \ln Z=fkT、
    \left(
        \beta=\frac{1}{kT}
    \right)
$$

であるため、$kT$ が出てきているということになる（分配関数を除けば、1自由度の場合を $f$ 倍したものと同じ）。そのため、ここで1自由度あたりのエネルギーを

$$
    U_1=nh\nu、(n:自然数)
$$

という離散的な値をとる（エネルギーの最小単位いわゆる**量子**が $h\nu$ である）と仮定すると

$$
    Z=
    \sum_{n_1,\cdots,n_f}
    \mathcal{W}(n_1,\cdots,n_f)
    e^{-(n_1+\cdots+n_f)\beta h\nu}
$$

となる。ここで各準位ごとに対象の数が $N_0,\cdots,N_n,\cdots$ だけあるとすると

$$
    n_1+\cdots+n_f=
    N_1+2N_2+\cdots+nN_n+\cdots
$$

であり、状態数も区別がつかないことを考慮して

$$
    \mathcal{W}(n_1,\cdots,n_f)=
    \frac{f!}{N_0!N_1!\cdots N_n!\cdots}
$$

となるため、多項定理より以下の通りになる。

$$
    Z=
    \sum_{N_0+N_1+\cdots=f}
    \frac{f!}{N_0!N_1!\cdots N_n!\cdots}
    e^{-(0N_0+\cdots+nN_n+\cdots)
    \beta h\nu}=
    \left(
        \sum_{n=0}^{\infty}
        e^{-n\beta h\nu}
    \right)^f
$$

このときは、分配関数も一体の分配関数を $N$ 乗したものとなっており、

$$
    Z_1=
    \sum_{n=0}^{\infty}
    e^{-n\beta h\nu}=
    \frac{1}{1-e^{-\beta h\nu}}
$$

であるから、最終的なエネルギーの期待値は以下の通りになる。

$$
    \braket{U}=
    -\frac{\partial}{\partial\beta}
    \ln Z=
    -f\frac{\partial}{\partial\beta}
    \ln Z_1=
    \frac{fh\nu}{e^{h\nu/kT}-1}
$$

そのため、エネルギーが1自由度ごとに等分配されるわけではなく、振動数に応じて分配されるエネルギーに制限があることになる。