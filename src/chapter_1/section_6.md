
## 見かけの力（慣性力）

一般的な慣性力を求める。

<p align="center">
    <img width="50%" src="images/rotate_coordinate.png">
</p>

$$
    X=x\cos\theta+y\sin\theta、
    Y=-x\sin\theta+y\cos\theta
$$

となるが、この逆変換を求めると

$$
    x=X\cos\theta-Y\sin\theta、
    y=X\sin\theta+Y\cos\theta
$$

これらから速度を求める。

$$
    v_x=
    v_X\cos\theta-v_Y\sin\theta-
    X\omega\sin\theta-Y\omega\cos\theta=
    (v_X-Y\omega)\cos\theta-
    (v_Y+X\omega)\sin\theta
$$
$$
    v_y=
    v_X\sin\theta+v_Y\cos\theta+
    X\omega\cos\theta-
    Y\omega\sin\theta=
    (v_X-Y\omega)\sin\theta+
    (v_Y+X\omega)\cos\theta
$$

極座標のときと違い、各成分に $\omega$ に応じた成分が表れる。回転により相対速度が生まれて、それによる加速も生まれる。