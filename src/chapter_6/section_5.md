
## 化学ポテンシャル

　ここまで統計集団を考えることで、そのエネルギーや圧力などを期待値で求めることができていた。しかし、その中には化学的性質（気体などの構成物質）を考慮されていないため、熱力学第１法則に
$$
    \mathrm{d}U=
    \mathrm{d}'Q+\mathrm{d}'W+
    \mu\mathrm{d}N
$$
というように**化学ポテンシャル** $\mu$ を導入する（一つの物質のみ存在する場合）。このようにすると、粒子数の変化があった場合も取り扱うことが可能になる。各集団における化学ポテンシャルの形は
$$
    \begin{cases} 
        ・　小正準集団：
        \mu=-T\left(
            \frac{\partial S}
            {\partial N}
        \right)_{U,V}\\
        ・　　正準集団：
        \mu=-\frac{1}{\beta}\left(
            \frac{\partial}
            {\partial N}\ln Z
        \right)_{T,V}\\
        ・等圧定圧集団：
         \mu=-\frac{1}{\beta}\left(
            \frac{\partial}
            {\partial N}\ln Y
        \right)_{T,P}
    \end{cases}
$$
として求まるので、自由粒子の場合を例にあげて各集団ごとにどうなるかを見ていくことにする。

　小正準集団の場合は、状態数ならびにエントロピーが前項の $N!$ を考慮して
$$
    \mathcal{W}=
    \frac{V^{N}}{N!h^{3N}}
    \frac{2\pi^{3N/2}\delta p}
    {\Gamma(3N/2)}
    (2mU)^{3N/2-1}
$$
$$
    S=
    Nk_{\mathrm{B}}\ln
    \frac{V(2\pi mU)^{3/2}}{h^3}-
    k_{\mathrm{B}}
    \ln N!-
    k_{\mathrm{B}}
    \ln\Gamma(3N/2)+
    \ln\frac{2\delta p}{\sqrt{2mU}}
$$
であるが、Stringの公式を用いると
$$
    \ln N!\simeq N\ln N-N、
    \ln\Gamma(3N/2)=\ln (3N/2)!\simeq 
    3N/2\ln(3N/2)-3N/2
$$
と置けるため、以下の形になる。
$$
    S=
    Nk_{\mathrm{B}}\ln
    \left[
    \frac{8V}{h^3}
    \left(
        \frac{\pi mU}{3}
    \right)^{3/2}
    \left(
        \frac{e}{N}
    \right)^{5/2}
    \right]+
    \ln\frac{2\delta p}{\sqrt{2mU}}
$$
これにより、化学ポテンシャルは以下の通りになる。
$$
    \mu=
    -T\left(
        \frac{\partial S}
        {\partial N}
    \right)_{U,V}=
    -k_{\mathrm{B}}T\ln
    \left[
    \frac{V}{Nh^3}
    \left(
        2\pi mk_{\mathrm{B}}T
    \right)^{3/2}
    \right]
$$
　同様に、正準集団においても分配関数が
$$
    Z=\frac{V^N}{N!h^{3N}}
    \left(
        \frac{2m\pi}{\beta}
    \right)^{3N/2}、
    \ln Z\simeq
    N\ln
    \left[
    \frac{Ve}{Nh^3}
    \left(
        \frac{2\pi m}{\beta}
    \right)^{3/2}
    \right]
$$
であったため、化学ポテンシャルは以下の通りとなる。
$$
    \mu=
    -\frac{1}{\beta}\left(
        \frac{\partial}
        {\partial N}\ln Z
    \right)_{T,V}=
    -k_{\mathrm{B}}T\ln
    \left[
    \frac{V}{Nh^3}
    \left(
        2\pi mk_{\mathrm{B}}T
    \right)^{3/2}
    \right]
$$
　さらに、等圧定温集団においても分配関数が
$$
    Y=
    \frac{(2m\pi)^{3N/2}}{h^{3N}}
    \frac{1}{\beta^{5N/2}P^{N}}、
    \ln Y=
    N\ln
    \left[
        \frac{(2\pi m)^{3/2}}
        {h^3\beta^{5/2}P}
    \right]=
    N\ln
    \left[
        \frac{\braket{V}}{Nh^3}
        \left(
            \frac{2\pi m}{\beta}
        \right)^{3/2}
    \right]
$$
であるから、上記と同じ形が得られることが確認できる。
$$
    \mu=
    -\frac{1}{\beta}\left(
        \frac{\partial}
        {\partial N}\ln Y
    \right)_{T,P}=
    -k_{\mathrm{B}}T\ln
    \left[
    \frac{\braket{V}}{Nh^3}
    \left(
        2\pi mk_{\mathrm{B}}T
    \right)^{3/2}
    \right]
$$
ここで、ギブスの自由エネルギと見比べると $N$ 以外の部分が一致しているため、
$$
    \mu=\frac{\braket{G}}{N}
$$
となり、化学ポテンシャルは一粒子あたりの $G$ であることが予想される。これについては、ギブスの自由エネルギーが
$$
    G=U-TS+PV
$$
であったが、この微小変化をとると
$$
    \mathrm{d}G=
    -S\mathrm{d}T+V\mathrm{d}P+
    \mu\mathrm{d}N
$$
となることから分かるように $G(T,P,N)$ の関数であることからきている。仮に、先ほどの式が成り立つとなると $\mu(T,P)$ であることになる。
$$
    G(T,P,N)=\mu(T,P)N
$$