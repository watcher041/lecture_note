
## 位相空間

　前回までは統計集団を用いて、その系のエネルギーや圧力を求めていたが、より厳密に多粒子系は取り扱うのに解析力学が用いられる。特にエネルギーもハミルトニアン $\mathcal{H}$ が用いられ、例として $N$ 個の粒子がある場合は $i$ 番目の粒子の一成分の位置と運動量を $q_i,p_i\ (i=1,\cdots,3N)$ とすると
$$
    \mathcal{H}
    (q_1,\cdots,q_{3N},p_1,\cdots,p_{3N})
$$
というように $6N$ の変数を持つ関数になる。また、この微小変化も
$$
    \mathrm{d}\mathcal{H}=
    \sum_{i=1}^{3N}
    \left[
    \left(
        \frac{\partial \mathcal{H}}
        {\partial q_i}
    \right)
    \mathrm{d}q_i+
    \left(
        \frac{\partial \mathcal{H}}
        {\partial p_i}
    \right)
    \mathrm{d}p_i
    \right]
$$
となるが、ハミルトンの運動方程式に従うと
$$
    \frac{\mathrm{d}q_i}{\mathrm{d}t}=
    \frac{\partial \mathcal{H}}
    {\partial p_i}、
    \frac{\mathrm{d}p_i}{\mathrm{d}t}=
    -\frac{\partial \mathcal{H}}
    {\partial q_i}
$$
であることから、以下のように書くこともできる。
$$
    \mathrm{d}\mathcal{H}=
    \sum_{i=1}^{3N}
    \left[
    -\left(
        \frac{\mathrm{d}p_i}{\mathrm{d}t}
    \right)
    \mathrm{d}q_i+
    \left(
        \frac{\mathrm{d}q_i}{\mathrm{d}t}
    \right)
    \mathrm{d}p_i
    \right]=
    \sum_{i=1}^{3N}
    \left(
        \frac{\mathrm{d}q_i}{\mathrm{d}t}
        \mathrm{d}p_i-
        \frac{\mathrm{d}p_i}{\mathrm{d}t}
        \mathrm{d}q_i
    \right)
$$
この形は、自由粒子の場合だと
$$
    \mathcal{H}=
    \sum_{i=1}^{3N}
    \frac{p_i^2}{2m}
$$
となるが、